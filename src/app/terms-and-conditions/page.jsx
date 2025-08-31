"use client";
import React from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiFileText,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { useState } from "react";

const TermsAndConditions = () => {
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
              <FiFileText className="w-10 h-10 text-[#100A1D]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f0a709]">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-gradient-to-b from-[#1A1335]/80 to-[#100A1D]/80 rounded-2xl shadow-2xl p-6 md:p-10 border border-[#f0a709]/20 backdrop-blur-sm">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-10 p-6 bg-[#1A1335] rounded-xl border-l-4 border-[#f0a709]">
              <p className="text-lg text-gray-300 mb-0">
                Welcome to{" "}
                <span className="text-[#f0a709] font-semibold">
                  Trestech Global
                </span>
                . These Terms and Conditions ("Terms") govern your access to and
                use of our website, products, and services. By accessing or
                using our website, you agree to be bound by these Terms.
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
                  1. Company Information
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
                <p className="text-gray-300 mb-4">
                  Trestech Global is a UK-registered company providing
                  comprehensive digital services including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {[
                    "Digital services and product development",
                    "Software and application development",
                    "IT support and e-commerce development",
                    "Digital and social media marketing",
                    "SaaS-based services and solutions",
                    "Bench sales recruitment and staff augmentation",
                    "Call center solutions and AI-based projects",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-[#f0a709] mr-2 mt-1">•</span>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
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
                  2. Eligibility
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
                <p className="text-gray-300">
                  By using our website or services, you represent that you are
                  at least 18 years of age and legally capable of entering into
                  a binding agreement under UK law.
                </p>
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
                  3. Scope of Services
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Digital Services & Development
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Website, software, and mobile application development,
                      maintenance, and support
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      E-commerce & SaaS Platforms
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Development, management, and subscription-based solutions
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Marketing Services
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Social media management, digital marketing campaigns, SEO,
                      and branding
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Recruitment & Staff Augmentation
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Bench sales recruitment and IT staffing solutions
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Trestech Global reserves the right to update, enhance, or
                  discontinue any service at its sole discretion.
                </p>
              </div>
            </div>

            {/* Additional sections would follow the same pattern */}
            {/* Section 4 */}
            <div id="section-4" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(4)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  4. User Responsibilities
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
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    You agree to provide accurate and complete information when
                    engaging with our services.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    You must not misuse our services for unlawful, harmful, or
                    fraudulent activities.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    You are responsible for maintaining the confidentiality of
                    your account and any sensitive data provided.
                  </li>
                </ul>
              </div>
            </div>

            {/* Continue with the same pattern for remaining sections 5-9 */}

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#1A1335] to-[#0F0828] p-8 rounded-2xl border border-[#f0a709]/20 mt-16">
              <h3 className="text-2xl font-bold text-[#f0a709] mb-4 flex items-center">
                <FiCheckCircle className="mr-3" />
                Contact Us
              </h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us at:
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

export default TermsAndConditions;
