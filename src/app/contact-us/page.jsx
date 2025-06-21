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
  style: ["normal"],
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
    window.open("https://calendly.com/muhammadnoumansha140", "_blank");
  };
  return (
    <div className={`${poppins.variable} ${openSans.variable} font-sans`}>
      {/* Hero Section with Gradient Overlay */}
      <section
        className="relative w-full h-[130vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-600/80"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <RiCustomerService2Fill className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                24/7 SUPPORT AVAILABLE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Let&apos;s Build <span className="text-blue-300">Something</span>{" "}
              Amazing Together
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Our team of experts is ready to help you with any questions about
              our cutting-edge technologies and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCalendly}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Schedule a Call</span>
                <FiChevronRight className="animate-pulse" />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Ribbon */}
      <div className="relative z-20 -mt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FiPhone className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Emergency Support</h3>
                <a
                  href="tel:+18005551234"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  +1 (800) 555-1234
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FiMail className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Email Us</h3>
                <a
                  href="mailto:support@techneon.com"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  support@techneon.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaWhatsapp className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-700">WhatsApp</h3>
                <a
                  href="https://wa.me/18005551234"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              OUR CONTACT CHANNELS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method to reach our team. We're available
              through various channels to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiMapPin className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Headquarters</h3>
              <p className="text-gray-600 mb-4">
                123 Tech Park Avenue, Silicon Valley, CA 94025, United States
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Get Directions <FiChevronRight className="ml-1" />
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiPhone className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-2">
                <a
                  href="tel:+18005551234"
                  className="hover:text-blue-600 font-medium"
                >
                  +1 (800) 555-1234
                </a>
              </p>
              <p className="text-gray-600 mb-4">
                <a
                  href="tel:+18005554321"
                  className="hover:text-blue-600 font-medium"
                >
                  +1 (800) 555-4321
                </a>
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Call Now <FiChevronRight className="ml-1" />
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiMail className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Support</h3>
              <p className="text-gray-600 mb-2">
                <a
                  href="mailto:info@techneon.com"
                  className="hover:text-blue-600 font-medium"
                >
                  info@techneon.com
                </a>
              </p>
              <p className="text-gray-600 mb-4">
                <a
                  href="mailto:support@techneon.com"
                  className="hover:text-blue-600 font-medium"
                >
                  support@techneon.com
                </a>
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Email Now <FiChevronRight className="ml-1" />
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Working Hours</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 flex justify-between">
                  <span>Mon-Fri</span>{" "}
                  <span className="font-medium">9am - 6pm</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Saturday</span>{" "}
                  <span className="font-medium">10am - 3pm</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Sunday</span>{" "}
                  <span className="font-medium text-red-500">Closed</span>
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                View Holidays <FiChevronRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl shadow-inner">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or technologies? Fill out the
                form below and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full">
                  <IoMdSend className="text-xl" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Techneon team working"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-600/60 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Prefer to Talk Directly?
                  </h3>
                  <p className="text-lg mb-6">
                    Schedule a 30-minute consultation call with one of our
                    experts to discuss your project in detail.
                  </p>
                  <button
                    onClick={openCalendly}
                    className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-100 flex items-center gap-2"
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
      <section className="relative h-[600px] w-full bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.465434032985!2d-122.0862469246896!3d37.42199987207478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1689874323456!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-6 w-11/12 max-w-md">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <FiMapPin className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Techneon Headquarters
              </h3>
              <p className="text-gray-600 mb-3">
                123 Tech Park Avenue, Silicon Valley, CA 94025, United States
              </p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-sm font-medium">
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
