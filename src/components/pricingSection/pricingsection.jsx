import React, { useState } from "react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      description: "WordPress/Shopify Development",
      price: billingCycle === "monthly" ? "₹999" : "₹899",
      features: [
        "WordPress/Shopify Setup",
        "UI Designing",
        "Frontend Development",
        "E-Commerce Setup",
        "Products Uploading",
        "Deployment",
      ],
      cta: "HIRE NOW",
      popular: false,
    },
    {
      name: "Professional Plan",
      description: "Customizable dashboards and websites",
      price: billingCycle === "monthly" ? "₹4999" : "₹4499",
      features: [
        "UI Designing (1 revision)",
        "FrontEnd Development",
        "Backend Development",
        "Testing",
        "Deployment",
      ],
      cta: "HIRE NOW",
      popular: false, // Will be set dynamically
    },
    {
      name: "Advanced Plan",
      description: "Dashboards, websites and mobile apps",
      price: billingCycle === "monthly" ? "₹9999" : "₹8999",
      features: [
        "Logo Designing",
        "UI Designing (3 revisions)",
        "FrontEnd Development",
        "Backend Development/Testing",
        "Deployment",
      ],
      cta: "HIRE NOW",
      popular: false, // Will be set dynamically
    },
  ];

  // Set popular plan based on billing cycle
  if (billingCycle === "monthly") {
    plans[1].popular = true; // Professional is popular monthly
    plans[2].popular = false;
  } else {
    plans[1].popular = false;
    plans[2].popular = true; // Advanced is popular yearly
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing <span className="text-[#f0a709]">Plans</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find the best possible plan according to your needs and scale your
            business efficiently.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-[#1A1335] rounded-full p-1 mt-8">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-[#f0a709] text-[#100A1D]"
                  : "text-gray-300"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-[#f0a709] text-[#100A1D]"
                  : "text-gray-300"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly (Save 10%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 
                ${
                  plan.popular
                    ? "transform scale-105 shadow-2xl border-2 border-[#f0a709]"
                    : "border border-gray-700 shadow-xl"
                } 
                hover:shadow-2xl hover:scale-105`}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1335] to-[#100A1D] opacity-95"></div>

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-2 right-2 z-10">
                  <div className="bg-[#f0a709] text-[#100A1D] font-bold px-3 py-1 text-xs rounded-full shadow-lg uppercase tracking-wide">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="relative p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-[#f0a709]">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">FROM</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    per {billingCycle === "monthly" ? "month" : "year"}
                  </p>
                  {billingCycle === "yearly" && (
                    <p className="text-[#f0a709] text-sm mt-1">
                      Save 10% with yearly billing
                    </p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#f0a709] flex-shrink-0 mr-3 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => (window.location.href = "/contact-us")}
                  className={`w-full py-3 font-semibold rounded-lg transition-all duration-300  cursor-pointer
                    ${
                      plan.popular
                        ? "bg-[#f0a709] text-[#100A1D] hover:bg-[#e09808] hover:shadow-lg"
                        : "bg-transparent text-[#f0a709] border-2 border-[#f0a709] hover:bg-[#f0a709] hover:text-[#100A1D]"
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
