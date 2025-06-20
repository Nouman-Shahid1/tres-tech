"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include weights you need
  style: ["normal", "italic"], // Optional
  variable: "--font-open-sans", // CSS variable name
});
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openCalendly = () => {
    window.open("https://calendly.com/muhammadnoumansha140", "_blank");
  };
  return (
    <nav
      className={`${openSans.className} absolute top-0 left-0 right-0 z-50 bg-transparent py-4 px-6 font-sans text-sm font-semibold`}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={20}
            className="object-contain h-24 "
          />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-[#fffefebd] text-[15px]">
          <Link
            href="/"
            className="hover:text-[#4370F3] transition-colors px-2"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-[#4370F3] transition-colors px-2"
          >
            Consulting Services
          </Link>

          <Link
            href="/success"
            className="hover:text-[#4370F3] transition-colors px-2"
          >
            Success Stories
          </Link>
          <Link
            href="/about"
            className="hover:text-[#4370F3] transition-colors px-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#4370F3] transition-colors px-2"
          >
            Contact
          </Link>
          <div className="hidden md:block ml-6">
            <Link
              href="#"
              onClick={openCalendly}
              className="bg-white text-black px-6 py-5 text-sm hover:text-[#4370F3] transition-colors"
            >
              BOOK A FREE CONSULTING CALL
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white mt-4 rounded-lg">
          <Link href="/" className="block px-4 py-3 hover:bg-gray-800">
            Home
          </Link>
          <Link href="/services" className="block px-4 py-3 hover:bg-gray-800">
            Consulting Services
          </Link>
          <Link href="/training" className="block px-4 py-3 hover:bg-gray-800">
            Training
          </Link>
          <Link href="/insights" className="block px-4 py-3 hover:bg-gray-800">
            Insights
          </Link>
          <Link href="/success" className="block px-4 py-3 hover:bg-gray-800">
            Success Stories
          </Link>
          <Link href="/about" className="block px-4 py-3 hover:bg-gray-800">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-3 hover:bg-gray-800">
            Contact
          </Link>
          <Link
            href="#"
            className="block px-4 py-3 bg-red-600 hover:bg-red-700 rounded-b-lg"
          >
            BOOK A FREE CONSULTING CALL
          </Link>
        </div>
      )}
    </nav>
  );
}
