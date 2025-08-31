"use client";
import React from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiShoppingCart,
  FiCheck,
  FiServer,
  FiTrendingUp,
} from "react-icons/fi";
import Footer from "@/components/Footer/Footer";

const EcommerceSolutions = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] text-white">
        {/* Hero Section */}
        <div
          className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(15, 8, 40, 0.85)",
          }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              E-Commerce <span className="text-[#f0a709]">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Empowering businesses to establish, scale, and thrive in the
              competitive digital marketplace
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => (window.location.href = "/contact-us")}
                className="bg-[#f0a709] cursor-pointer hover:text-[#e09808] hover:bg-[#fff] text-[#100A1D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-28 relative z-10">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl shadow-2xl p-8 md:p-12 border border-[#f0a709]/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-6">
                <FiShoppingCart className="w-8 h-8 text-[#100A1D]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete E-Commerce Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                At Tres Tech Global, we deliver end-to-end e-commerce solutions
                that empower businesses to establish, scale, and thrive in the
                competitive digital marketplace. From custom development to 24/7
                support services and digital marketing strategies, we provide
                everything you need to build a powerful online presence and
                maximize revenue.
              </p>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-6">
                We don't just build e-commerce websites — we create intelligent,
                SaaS-based platforms that integrate seamlessly with your
                operations, ensuring smooth functionality, secure transactions,
                and exceptional customer experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our E-Commerce <span className="text-[#f0a709]">Expertise</span>{" "}
              Includes
            </h2>
            <div className="h-1 w-24 bg-[#f0a709] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Development Card */}
            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl p-8 border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-4">
                  <FiCheck className="w-8 h-8 text-[#100A1D]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  E-Commerce Development
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Custom online store design & development tailored to your
                    brand identity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Mobile-first, responsive platforms for seamless shopping on
                    all devices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Integration with leading marketplaces (Amazon, eBay,
                    Shopify, etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>Secure payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    AI-powered personalization tools for smarter recommendations
                  </span>
                </li>
              </ul>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl p-8 border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-4">
                  <FiServer className="w-8 h-8 text-[#100A1D]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  E-Commerce Support & Services
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    24/7 technical support to ensure your store runs smoothly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Regular updates, bug fixes, and performance optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Cloud hosting & scalability to handle peak shopping seasons
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Inventory, order, and shipping management solutions
                  </span>
                </li>
              </ul>
            </div>

            {/* Marketing Card */}
            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl p-8 border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-4">
                  <FiTrendingUp className="w-8 h-8 text-[#100A1D]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  E-Commerce Digital Marketing
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Search Engine Optimization (SEO) to boost visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Social media marketing campaigns to engage audiences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Pay-Per-Click (PPC) advertising to drive targeted traffic
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>
                    Email & remarketing automation to retain customers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f0a709] mr-2 mt-1">•</span>
                  <span>Data-driven analytics and reporting dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl shadow-2xl p-8 md:p-12 border border-[#f0a709]/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose{" "}
                <span className="text-[#f0a709]">Tres Tech Global</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    All-in-One Solutions
                  </h3>
                  <p className="text-gray-300">
                    From development to marketing, we cover the full e-commerce
                    journey
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Scalable & Flexible
                  </h3>
                  <p className="text-gray-300">
                    Our SaaS-powered platforms grow as your business grows
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customer-Centric Approach
                  </h3>
                  <p className="text-gray-300">
                    Every solution is designed to enhance user experience and
                    build brand loyalty
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Proven Expertise
                  </h3>
                  <p className="text-gray-300">
                    Our team of developers, marketers, and support specialists
                    deliver measurable results
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => (window.location.href = "/#pricing-section")}
                className="bg-[#f0a709] hover:bg-[#fff] hover:text-[#f0a709] cursor-pointer text-[#100A1D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your E-Commerce Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EcommerceSolutions;
