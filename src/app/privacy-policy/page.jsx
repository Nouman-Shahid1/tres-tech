"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiShield,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const PrivacyPolicy = () => {
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
              <FiShield className="w-10 h-10 text-[#100A1D]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f0a709]">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn how we protect and handle your personal information
          </p>
        </div>

        {/* Privacy Content */}
        <div className="bg-gradient-to-b from-[#1A1335]/80 to-[#100A1D]/80 rounded-2xl shadow-2xl p-6 md:p-10 border border-[#f0a709]/20 backdrop-blur-sm">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-10 p-6 bg-[#1A1335] rounded-xl border-l-4 border-[#f0a709]">
              <p className="text-lg text-gray-300 mb-0">
                <span className="text-[#f0a709] font-semibold">
                  Trestech Global
                </span>{" "}
                respects your privacy and is committed to protecting your
                personal data. This Privacy Policy explains how we collect, use,
                and safeguard your information.
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
                  1. Information We Collect
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
                  We may collect the following types of data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Name, email address, phone number, billing details
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Business Information
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Company details, project requirements, recruitment data
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Technical Information
                    </h3>
                    <p className="text-gray-300 text-sm">
                      IP address, browser type, device information, cookies
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Service Data
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Communications, contracts, and service usage records
                    </p>
                  </div>
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
                  2. How We Use Your Information
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
                <p className="text-gray-300 mb-4">
                  We use collected information to:
                </p>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Provide, manage, and improve our services.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Communicate with you regarding projects, support, or
                    inquiries.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Process payments, invoices, and contracts.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Conduct recruitment, staff augmentation, and consultancy
                    services.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Comply with UK legal obligations.
                  </li>
                </ul>
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
                  3. Sharing of Information
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
                    We do not sell or rent your personal data.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    We may share information with trusted partners,
                    subcontractors, or service providers strictly to fulfill our
                    services.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f0a709] mr-2 mt-1">•</span>
                    Data may be disclosed if required by law or regulatory
                    authorities.
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
                  4. Data Security
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
                <p className="text-gray-300">
                  We employ industry-standard security measures to protect your
                  data. However, no system is completely secure, and Trestech
                  Global cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(5)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  5. Data Retention
                </h2>
                {openSections[5] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[5] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">
                  We retain personal data only as long as necessary to provide
                  our services or comply with legal obligations.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(6)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  6. Your Rights
                </h2>
                {openSections[6] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[6] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 mb-4">
                  As per the UK GDPR and Data Protection Act 2018, you have the
                  right to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Access
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Access, correct, or delete your personal data
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Control
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Restrict or object to processing
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Portability
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Request data portability
                    </p>
                  </div>
                  <div className="bg-[#1A1335] p-5 rounded-xl border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors">
                    <h3 className="font-semibold text-[#f0a709] mb-2">
                      Consent
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Withdraw consent at any time
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  To exercise your rights, contact us using the information
                  below.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-10">
              <div
                className="flex items-center justify-between cursor-pointer py-4 border-b border-[#f0a709]/30"
                onClick={() => toggleSection(7)}
              >
                <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
                  <FiCheckCircle className="mr-3 text-[#f0a709]" />
                  7. Cookies
                </h2>
                {openSections[7] ? (
                  <FiChevronUp className="text-[#f0a709]" />
                ) : (
                  <FiChevronDown className="text-[#f0a709]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[7] ? "max-h-96 py-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">
                  Our website may use cookies to improve user experience,
                  analyze traffic, and deliver tailored content. You can disable
                  cookies in your browser settings.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#1A1335] to-[#0F0828] p-8 rounded-2xl border border-[#f0a709]/20 mt-16">
              <h3 className="text-2xl font-bold text-[#f0a709] mb-4 flex items-center">
                <FiCheckCircle className="mr-3" />
                Contact Us
              </h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or wish to
                exercise your data rights, please contact us at:
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

export default PrivacyPolicy;
