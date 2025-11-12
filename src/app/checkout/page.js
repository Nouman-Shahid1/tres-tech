"use client";
import { useState } from "react";
import { FiLock } from "react-icons/fi";

export default function Checkout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    mobile: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // PayPro API Configuration
  const PAYPRO_CONFIG = {
    baseURL: "https://api.paypro.com.pk/v2",
    credentials: {
      clientID: "p5gv0fg9utxUPbc",
      clientSecret: "MzWBmcVD47BGWOA",
      merchantId: "Trestech_Global_USD",
    },
  };

  // Generate Authorization Token
  const generateAuthToken = async () => {
    try {
      const response = await fetch("/api/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientid: PAYPRO_CONFIG.credentials.clientID,
          clientsecret: PAYPRO_CONFIG.credentials.clientSecret,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Auth API Response:", data);
      const token = data.Token;

      if (!token) {
        throw new Error("No token received from PayPro API");
      }

      console.log("Token received:", token);
      return token;
    } catch (error) {
      console.error("Error generating auth token:", error);
      throw new Error(`Authentication failed: ${error.message}`);
    }
  };

  // Function to get current USD to PKR exchange rate
  const getExchangeRate = async () => {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      return data.rates.PKR || 280; // Fallback to 280 if API fails
    } catch (error) {
      console.error("Error fetching exchange rate, using fallback:", error);
      return 280; // Fallback exchange rate
    }
  };

  // Convert USD to PKR
  const convertUsdToPkr = async (usdAmount) => {
    const exchangeRate = await getExchangeRate();
    const pkrAmount = Math.round(usdAmount * exchangeRate);
    return pkrAmount.toString();
  };

  const createPayProOrder = async (token, orderData) => {
    try {
      const orderNumber = `ORDER-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      const orderPayload = [
        {
          MerchantId: PAYPRO_CONFIG.credentials.merchantId,
        },
        {
          OrderNumber: orderNumber,
          OrderAmount: orderData.amount, // This should be in PKR now
          OrderDueDate: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-GB"), // 30 days from now
          OrderType: "Service",
          IssueDate: new Date().toLocaleDateString("en-GB"),
          OrderExpireAfterSeconds: "0",
          CustomerName: `${orderData.customer.firstName} ${orderData.customer.lastName}`,
          CustomerMobile: orderData.customer.mobile || "",
          CustomerEmail: orderData.customer.email || "",
          CustomerAddress: orderData.customer.address || "",
        },
      ];

      const response = await fetch("/api/checkout/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: token,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("PayPro API Response:", result);

      // Check if order was created successfully
      // Handle PayPro response array format
      const statusObj = Array.isArray(result)
        ? result.find((item) => item.Status)
        : result;
      const descObj = Array.isArray(result)
        ? result.find((item) => item.Description)
        : result;

      const status = statusObj?.Status || result.Status;
      const description = descObj?.Description || result.Description;

      if (status === "00" || status === "69") {
        return {
          success: true,
          orderNumber: orderNumber,
          payProResponse: result,
        };
      } else {
        console.error("PayPro Error Response:", result);

        if (status === "04") {
          throw new Error(
            `Authorization Error: ${description}. Please check your PayPro merchant permissions.`
          );
        }

        throw new Error(
          `Order creation failed: ${description || JSON.stringify(result)}`
        );
      }
    } catch (error) {
      console.error("Error creating PayPro order:", error);
      throw new Error(`Order creation failed: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate amount
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setIsProcessing(true);

    try {
      const token = await generateAuthToken();

      const usdAmount = parseFloat(formData.amount);
      const pkrAmount = await convertUsdToPkr(usdAmount);

      const orderData = {
        amount: pkrAmount, // Send PKR amount to PayPro
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          address: `${formData.billingAddress}, ${formData.city}, ${formData.zipCode}`,
        },
        originalUsdAmount: usdAmount,
        convertedPkrAmount: pkrAmount,
      };

      const orderResult = await createPayProOrder(token, orderData);

      if (orderResult.success) {
        localStorage.setItem("orderAmount", `$${usdAmount}`);
        localStorage.setItem("orderNumber", orderResult.orderNumber);
        localStorage.setItem(
          "customerName",
          `${formData.firstName} ${formData.lastName}`
        );

        setNotification({
          type: "success",
          message: `${orderResult.orderNumber} created successfully!`,
          visible: true,
          orderNumber: orderResult.orderNumber,
        });

        // Extract and redirect to Click2Pay URL
        try {
          const payProResp = orderResult.payProResponse;
          let click2payUrl = null;

          if (Array.isArray(payProResp)) {
            // find an object that has any of the known URL fields
            const urlObj = payProResp.find((item) => {
              if (!item || typeof item !== "object") return false;
              return (
                item.Click2Pay ||
                item.short_Click2Pay ||
                item.BillUrl ||
                item.short_BillUrl
              );
            });

            if (urlObj) {
              click2payUrl =
                urlObj.Click2Pay ||
                urlObj.short_Click2Pay ||
                urlObj.BillUrl ||
                urlObj.short_BillUrl ||
                null;
            }
          } else if (payProResp && typeof payProResp === "object") {
            click2payUrl =
              payProResp.Click2Pay ||
              payProResp.short_Click2Pay ||
              payProResp.BillUrl ||
              payProResp.short_BillUrl ||
              null;
          }

          if (click2payUrl) {
            // Redirect to PayPro payment page
            window.location.href = click2payUrl;
            return; // Stop further execution
          }
        } catch (err) {
          console.warn(
            "Could not parse Click2Pay URL from PayPro response:",
            err
          );
        }

        setTimeout(() => {
          setNotification((prev) => ({ ...prev, visible: false }));
        }, 5000);
      } else {
        throw new Error("Failed to create order");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert(`Payment error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Format price for display
  const formatPrice = (price) => {
    return `$${parseFloat(price).toLocaleString()}`;
  };

  // Notification state (simple toast)
  const [notification, setNotification] = useState({
    type: "",
    message: "",
    visible: false,
    orderNumber: null,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Your <span className="text-[#f0a709]">Payment</span>
          </h1>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <FiLock className="text-[#f0a709] mr-2" />
              <h2 className="text-2xl font-bold text-white">Secure Payment</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount and Currency Fields */}

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h3>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
              <div className="flex-1">
                <label className="block text-white font-semibold mb-2">
                  Amount (USD)
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0.01"
                  className="w-full p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                  required
                />
              </div>
              <div className="w-full sm:w-auto">
                <label className="block text-white font-semibold mb-2">
                  Currency
                </label>
                <input
                  type="text"
                  value="USD"
                  disabled
                  className="w-full sm:w-32 p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white text-center cursor-not-allowed opacity-70"
                />
              </div>
            </div>
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Billing Address
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="billingAddress"
                  placeholder="Street address"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                    required
                  />
                </div>
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full mt-4 p-4 bg-[#100A1D] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#f0a709] focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full ${
                isProcessing
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#f0a709] hover:bg-[#e09808]"
              } text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg`}
            >
              <FiLock className="text-lg" />
              {isProcessing
                ? "Processing..."
                : `Pay $${formData.amount || "0"} USD`}
            </button>
          </form>
        </div>
      </div>

      {notification.visible && (
        <div className="fixed right-6 top-6 z-50">
          <div
            className={`max-w-sm w-full shadow-lg rounded-lg px-6 py-4 flex items-start gap-4 border-l-4 ${
              notification.type === "success"
                ? "bg-white text-gray-900 border-green-500"
                : "bg-yellow-50 text-gray-900 border-yellow-500"
            }`}
            role="status"
          >
            <div className="flex-1">
              <div className="font-semibold mb-1">{notification.message}</div>
            </div>
            <button
              aria-label="Dismiss"
              onClick={() =>
                setNotification((prev) => ({ ...prev, visible: false }))
              }
              className="text-gray-500 hover:text-gray-700 ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
