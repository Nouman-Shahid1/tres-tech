"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assests/logo.png";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTwitter,
} from "react-icons/fi";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
  FaApplePay,
  FaPaypal,
} from "react-icons/fa";
import { SiGooglepay, SiStripe } from "react-icons/si";
import { FiLock } from "react-icons/fi";
function Footer() {
  const openCalendly = () => {
    window.open("https://calendly.com/consultancy-trestech-global", "_blank");
  };

  return (
    <>
      <section
        id="contact-footer"
        className="flex flex-col lg:flex-row items-center bg-[#000] min-h-[100vh] gap-6"
      >
        {/* Left side - Image */}
        <div
          className="w-full lg:w-1/2 min-h-[100vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 px-6 lg:px-24 py-16">
          <h4 className="text-[#f0a709] uppercase text-sm font-semibold tracking-widest mb-4">
            Let&apos;s Connect
          </h4>
          <h2 className="text-[45px] font-bold leading-tight text-[#f0a709] mb-6">
            Ready to discuss your project?
          </h2>
          <p className="text-white text-[15px] leading-relaxed mb-8">
            Schedule a free consultation with our team to explore how we can
            help bring your vision to life. We'll discuss your goals, timeline,
            and budget to create a customized solution that works for you.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-[#f0a709]  p-2 rounded-full mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f0a709]">
                  30-Minute Free Consultation
                </h3>
                <p className="text-white text-[15px]">
                  No obligation, just expert advice
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#f0a709]  p-2 rounded-full mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f0a709]">
                  Tailored Solutions
                </h3>
                <p className="text-white text-[15px]">
                  Customized approach for your unique needs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#f0a709] p-2 rounded-full mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f0a709]">
                  Direct Communication
                </h3>
                <p className="text-white text-[15px]">
                  Speak directly with our experts
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={openCalendly}
              className="hover:cursor-pointer rounded-4xl text-[18px] inline-block mt-4 bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-white px-8 py-3 w-full transition-colors font-bold"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full bg-black border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src={logo}
                  alt="Tres-Tech Logo"
                  className="h-24 w-auto object-contain"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                We provide expert consulting services to help businesses grow
                and succeed. Partner with us for strategic solutions tailored to
                your needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FiPhone className="text-[#f0a709] mt-0.5" />
                  <span className="text-white/50 text-sm">+447482527700‬</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiMail className="text-[#f0a709] mt-0.5" />
                  <span className="text-white/50 text-sm">
                    trestech21@gmail.com
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#f0a709] mt-0.5" />
                  <span className="text-white/50 text-sm">
                    OFFICE 14082 182-184 HIGH STREET NORTH EAST HAM
                    <br />
                    LONDON UNITED KINGDOM E6 2JA
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/50 hover:text-[#f0a709] text-sm transition-colors flex items-center group"
                  >
                    <FiArrowRight className="mr-2 text-[#f0a709] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/50 hover:text-[#f0a709] text-sm transition-colors flex items-center group"
                  >
                    <FiArrowRight className="mr-2 text-[#f0a709] opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consulting-services"
                    className="text-white/50 hover:text-[#f0a709] text-sm transition-colors flex items-center group"
                  >
                    <FiArrowRight className="mr-2 text-[#f0a709] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Product & Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white/50 hover:text-[#f0a709] text-sm transition-colors flex items-center group"
                  >
                    <FiArrowRight className="mr-2 text-[#f0a709] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Our Key Services Include:
              </h4>
              <ul className="space-y-3">
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Custom Software Development
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  IT & Tech Support
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Call Center Solutions
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Digital & Social Media Marketing
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Customized Dashboards & API Integrations
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  AI-Based Development
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Project Management Services
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Tech & Non-Tech Bench Sales Recruitment
                </li>
                <li className="text-white/50 text-sm hover:text-[#f0a709]">
                  Placement Consultancy & Staff Augmentation
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Stay Connected
              </h4>
              <p className="text-white/50 text-sm">
                Get the latest insights and updates directly to your inbox.
              </p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-sm text-white w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#f0a709] hover:bg-[#f0a709] text-white px-4 py-2 text-sm font-medium rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex items-center gap-4 mt-4">
                <Link
                  href="https://facebook.com"
                  className="text-[#f0a709] hover:text-[#fff] p-2 rounded-full hover:bg-[#f0a709] transition-colors"
                >
                  <FiFacebook />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-[#f0a709] hover:text-[#fff] p-2 rounded-full hover:bg-[#f0a709] transition-colors"
                >
                  <FiTwitter />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-[#f0a709] hover:text-[#fff] p-2 rounded-full hover:bg-[#f0a709] transition-colors"
                >
                  <FiLinkedin />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-[#f0a709] hover:text-[#fff] p-2 rounded-full hover:bg-[#f0a709] transition-colors"
                >
                  <FiInstagram />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-8 text-center tracking-wide">
                PAYMENT METHODS
              </h4>

              <div className="flex flex-row flex-wrap gap-6">
                <div className="flex flex-col items-center group">
                  <div className="p-3 rounded-lg group-hover:bg-black transition-all duration-300 cursor-pointer">
                    <FaCcVisa className="text-4xl text-[#1A1F71] group-hover:text-[#f0a709]" />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                    Visa
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="p-3 rounded-lg group-hover:bg-black transition-all duration-300 cursor-pointer">
                    <FaCcMastercard className="text-4xl text-[#EB001B] group-hover:text-[#f0a709] cursor-pointer" />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                    Mastercard
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="p-3 rounded-lg group-hover:bg-black transition-all duration-300 cursor-pointer">
                    <FaCcAmex className="text-4xl text-[#2E77BB] group-hover:text-[#f0a709]" />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                    Amex
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="p-3 rounded-lg group-hover:bg-black transition-all duration-300 cursor-pointer">
                    <FaPaypal className="text-4xl text-[#003087] group-hover:text-[#f0a709]" />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                    PayPal
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="p-3 rounded-lg group-hover:bg-black transition-all duration-300 cursor-pointer">
                    <SiStripe className="text-4xl text-[#635BFF] group-hover:text-[#f0a709]" />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                    Stripe
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Methods */}

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2020 Tres Tech Global. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link
                  href="/privacy-policy"
                  className="text-white/50 hover:text-[#f0a709] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-white/50 hover:text-[#f0a709] text-sm transition-colors"
                >
                  Terms And Conditions
                </Link>
                <Link
                  href="/return-policy"
                  className="text-white/50 hover:text-[#f0a709] text-sm transition-colors"
                >
                  Return Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
