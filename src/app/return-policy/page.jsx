"use client";
import React from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiFileText,
  FiChevronDown,
  FiChevronUp,
  FiRefreshCw,
} from "react-icons/fi";
import { useState } from "react";

const ReturnPolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0828] via-[#1A1335] to-[#100A1D] text-white">
      {/* Main Content */}
      <main className="max-w-7xl pt-32 mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-[#f0a709] rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#f0a709] to-[#ffbf00] rounded-full">
              <FiRefreshCw className="w-10 h-10 text-[#100A1D]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f0a709]">
            Return Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our policy on returns and refunds for products and services
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-gradient-to-b from-[#1A1335]/80 to-[#100A1D]/80 rounded-2xl shadow-2xl p-6 md:p-10 border border-[#f0a709]/20 backdrop-blur-sm">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-10 p-6 bg-[#1A1335] rounded-xl border-l-4 border-[#f0a709]">
              <p className="text-lg text-gray-300 mb-0">
                At{" "}
                <span className="text-[#f0a709] font-semibold">
                  Trestech Global
                </span>
                , we strive to deliver high-quality digital products and
                services. However, if you are not satisfied, we offer a 7-day
                test and return policy on eligible products.
              </p>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(1)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  1. Eligibility for Returns
                </h2>
                {openSections[1] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[1] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    All digital products and services provided by Trestech
                    Global are testable for 7 days.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    If you are not satisfied within this period, you may request
                    a refund.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Refunds are applicable only to products and services
                    purchased directly from Trestech Global.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(2)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  2. Refund Conditions
                </h2>
                {openSections[2] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[2] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <ul className="text-gray-300 space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Refund requests must be submitted in writing within 7 days
                    of purchase.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>A 20%
                    deduction will apply to cover administrative, licensing, and
                    operational costs.
                  </li>
                </ul>

                <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 mb-4">
                  <h3 className="font-semibold text-[#f0a709] mb-3">
                    Refunds are not applicable if:
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#f0a709] mr-2">-</span>
                      The product/service was used beyond the test period.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f0a709] mr-2">-</span>
                      The dissatisfaction arises due to third-party integrations
                      or modifications.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f0a709] mr-2">-</span>
                      The service was customized/developed specifically for your
                      business needs (e.g., bespoke software or websites).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(3)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  3. Process for Returns
                </h2>
                {openSections[3] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[3] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Contact us with your order details and reason for return.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Our team will review and process your refund within 7–14
                    business days.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Refunds will be credited to the original payment method
                    used.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(4)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  4. Exceptions
                </h2>
                {openSections[4] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[4] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Non-Refundable Services
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Recruitment, staff augmentation, and consultancy services
                      are not refundable once initiated.
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      SaaS Subscriptions
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Refundable only within the 7-day trial period.
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Custom Solutions
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Call center and AI-based project solutions are
                      non-refundable once deployed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#1A1335] to-[#0F0828] p-8 rounded-2xl border border-[#f0a709]/20 mt-16">
              <h3 className="text-2xl font-bold text-[#f0a709] mb-4 flex items-center">
                <FiCheckCircle className="mr-3" />
                Contact Us
              </h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about our Return Policy or need to
                initiate a return, please contact us at:
              </p>
              <p className="text-[#f0a709] font-semibold text-lg">
                support@trestech-global.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReturnPolicy;
