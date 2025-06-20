"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assests/logo.png";

function Footer() {
  const openCalendly = () => {
    window.open("https://calendly.com/muhammadnoumansha140", "_blank");
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row items-center bg-[#F7F7F7] min-h-[100vh] gap-6">
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
          <h4 className="text-[#27A1F6] uppercase text-sm font-semibold tracking-widest mb-4">
            Let's Connect
          </h4>
          <h2 className="text-[45px] font-bold leading-tight text-gray-900 mb-6">
            Ready to discuss your project?
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
            Schedule a free consultation with our team to explore how we can
            help bring your vision to life. We'll discuss your goals, timeline,
            and budget to create a customized solution that works for you.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-[#27A1F6]  p-2 rounded-full mt-1">
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
                <h3 className="text-lg font-semibold text-gray-900">
                  30-Minute Free Consultation
                </h3>
                <p className="text-gray-600 text-[15px]">
                  No obligation, just expert advice
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#27A1F6]  p-2 rounded-full mt-1">
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
                <h3 className="text-lg font-semibold text-gray-900">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600 text-[15px]">
                  Customized approach for your unique needs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#27A1F6] p-2 rounded-full mt-1">
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
                <h3 className="text-lg font-semibold text-gray-900">
                  Direct Communication
                </h3>
                <p className="text-gray-600 text-[15px]">
                  Speak directly with our experts
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={openCalendly}
            className="hover:cursor-pointer text-[12px] inline-block mt-4 bg-[#27A1F6] text-white px-8 py-3 hover:bg-[#4370F3] transition-colors font-bold"
          >
            Schedule a Call
          </button>
        </div>
      </section>
      <footer className="w-full bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 py-12 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full lg:col-span-2">
              <a href="/" className="flex justify-center lg:justify-start mb-6">
                <Image
                  src={logo}
                  alt="Logo"
                  width={220}
                  height={20}
                  className="object-contain h-24 "
                />
              </a>
              <p className="text-gray-600 text-sm mb-6 text-center lg:text-left max-w-md">
                We provide expert consulting services and training to help
                businesses grow and succeed in today's competitive landscape.
              </p>
              <div className="flex flex-col space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>contact@techneon.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>
                    123 Business Ave, Suite 100
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href="/"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/success-stories"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Services
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href="/consulting"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Consulting Services
                  </a>
                </li>
                <li>
                  <a
                    href="/training"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Training Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/strategy"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="/implementation"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Implementation
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Resources
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href="/insights"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/whitepapers"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a
                    href="/webinars"
                    className="hover:text-[#4370F3] transition-colors"
                  >
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2025 Techneon. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-[#4370F3]"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-[#4370F3]"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-sm text-gray-600 hover:text-[#4370F3]"
                >
                  Cookie Policy
                </a>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-600 hover:text-[#4370F3]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4370F3]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4370F3]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4370F3]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4370F3]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
    </>
  );
}

export default Footer;
