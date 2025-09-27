"use client";
import React from "react";
import { Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
  display: "swap",
});

const ContactUs = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/consultancy-trestech-global", "_blank");
  };
  return (
    <div
      className={`${poppins.variable} ${openSans.variable} font-sans bg-black`}
    >
      {/* Hero Section with Gradient Overlay */}
      <section
        className="relative w-full h-[130vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#100A1D] to-transparent"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-[#f0a709]/50 px-4 py-2 rounded-full mb-6">
              <RiCustomerService2Fill className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                24/7 SUPPORT AVAILABLE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Ready to <span className="text-[#f0a709]">transform</span> your
              business?
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Get in touch with Tres Tech Global today. Our team of experts is
              here to understand your unique needs and provide innovative,
              tailored solutions that drive success. Whether you&rsquo;re
              interested in our IT services, custom software, or recruitment
              consultancy, we&rsquo;re here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCalendly}
                className="bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Schedule a Call</span>
                <FiChevronRight className="animate-pulse" />
              </button>
              <button
                onClick={() => (window.location.href = "/consulting-services")}
                className="bg-transparent cursor-pointer border-2 border-white hover:text-[#f0a709] hover:border-[#f0a709] hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-3xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border border-[#f0a709]/30">
            <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl hover:bg-[#f0a709]/10 transition-all duration-300 group">
              <div className="bg-[#f0a709] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FiPhone className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-300 text-sm uppercase tracking-wide">
                  Emergency Support
                </h3>
                <a
                  href="tel:+447482527700"
                  className="text-[#f0a709] hover:text-[#ffbf4d] font-semibold text-lg block mt-1"
                >
                  +44 7482 527700
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl hover:bg-[#f0a709]/10 transition-all duration-300 group">
              <div className="bg-[#f0a709] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FiMail className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-300 text-sm uppercase tracking-wide">
                  Email Us
                </h3>
                <a
                  href="mailto:trestech21@gmail.com"
                  className="text-[#f0a709] hover:text-[#ffbf4d] font-semibold text-lg block mt-1"
                >
                  trestech21@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl hover:bg-[#f0a709]/10 transition-all duration-300 group">
              <div className="bg-[#f0a709] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-300 text-sm uppercase tracking-wide">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/447482527700"
                  className="text-[#f0a709] hover:text-[#ffbf4d] font-semibold text-lg block mt-1"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#f0a709] text-black px-6 py-2 rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
              OUR CONTACT CHANNELS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Multiple Ways to <span className="text-[#f0a709]">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your preferred method to reach our team. We&#39;re
              available through various channels to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-800 group">
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiMapPin className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Our Headquarters
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                OFFICE 14082 182-184 HIGH STREET NORTH EAST HAM LONDON UNITED
                KINGDOM E6 2JA
              </p>
              <a
                href="#"
                className="text-[#f0a709] font-medium inline-flex items-center hover:underline"
              >
                Get Directions <FiChevronRight className="ml-1" />
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-800 group">
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiPhone className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Phone Support
              </h3>
              <p className="text-gray-400 mb-2">
                <a
                  href="tel:+447482527700"
                  className="hover:text-[#f0a709] font-medium transition-colors"
                >
                  +44 7482 527700
                </a>
              </p>
              <a
                href="#"
                className="text-[#f0a709] font-medium inline-flex items-center hover:underline mt-4"
              >
                Call Now <FiChevronRight className="ml-1" />
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-800 group">
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiMail className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Email Support
              </h3>
              <p className="text-gray-400 mb-2">
                <a
                  href="mailto:trestech21@gmail.com"
                  className="hover:text-[#f0a709] font-medium transition-colors"
                >
                  trestech21@gmail.com
                </a>
              </p>
              <a
                href="#"
                className="text-[#f0a709] font-medium inline-flex items-center hover:underline mt-4"
              >
                Email Now <FiChevronRight className="ml-1" />
              </a>
            </div>

            {/* Hours */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-800 group">
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiClock className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Working Hours
              </h3>
              <div className="space-y-3 mb-4">
                <p className="text-gray-400 flex justify-between items-center">
                  <span>Mon-Fri</span>
                  <span className="font-medium text-[#f0a709] bg-black/50 px-2 py-1 rounded">
                    9am - 6pm
                  </span>
                </p>
                <p className="text-gray-400 flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-medium text-[#f0a709] bg-black/50 px-2 py-1 rounded">
                    10am - 3pm
                  </span>
                </p>
                <p className="text-gray-400 flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-red-400 bg-black/50 px-2 py-1 rounded">
                    Closed
                  </span>
                </p>
              </div>
              <a
                href="#"
                className="text-[#f0a709] font-medium inline-flex items-center hover:underline"
              >
                View Holidays <FiChevronRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-[#0F0828] to-[#100A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#1A1335] to-[#100A1D] p-8 md:p-12 rounded-2xl shadow-2xl border border-[#f0a709]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Send Us a <span className="text-[#f0a709]">Message</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Have questions about our services or technologies? Fill out the
                form below and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f0a709] focus:border-[#f0a709] outline-none transition bg-[#100A1D] text-white placeholder-gray-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f0a709] focus:border-[#f0a709] outline-none transition bg-[#100A1D] text-white placeholder-gray-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f0a709] focus:border-[#f0a709] outline-none transition bg-[#100A1D] text-white placeholder-gray-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f0a709] focus:border-[#f0a709] outline-none transition bg-[#100A1D] text-white placeholder-gray-500"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button className="bg-gradient-to-r from-[#f0a709] to-[#ffbf4d] hover:from-[#ffbf4d] hover:text-white cursor-pointer hover:to-[#f0a709] text-[#100A1D] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full">
                  <IoMdSend className="text-xl" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f0a709]/30">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Tres-Tech team working"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100A1D] to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Prefer to Talk{" "}
                    <span className="text-[#f0a709]">Directly</span>?
                  </h3>
                  <p className="text-lg mb-6 text-gray-200">
                    Schedule a 30-minute consultation call with one of our
                    experts to discuss your project in detail.
                  </p>
                  <button
                    onClick={openCalendly}
                    className="bg-[#f0a709] cursor-pointer text-[#100A1D] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#ffbf4d] flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Book a Video Call</span>
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative h-[600px] w-full bg-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.197715236675!2d0.05200777697209901!3d51.53634697180615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7a8b94b7b0b%3A0x3b0b0b0b0b0b0b0b!2s182-184%20High%20St%20N%2C%20London%20E6%202JA%2C%20UK!5e0!3m2!1sen!2sus!4v1720248561585!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-2xl shadow-2xl p-6 w-11/12 max-w-md border border-[#f0a709]/30">
          <div className="flex items-start gap-4">
            <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
              <FiMapPin className="text-black text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">
                Tres Tech Global Headquarters
              </h3>
              <p className="text-gray-300 mb-3 text-sm">
                OFFICE 14082 182-184 HIGH STREET NORTH EAST HAM LONDON UNITED
                KINGDOM E6 2JA
              </p>
              <button className="bg-[#f0a709] text-black py-2 px-6 rounded-lg text-sm font-medium hover:bg-[#ffbf4d] transition-colors shadow-md">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
