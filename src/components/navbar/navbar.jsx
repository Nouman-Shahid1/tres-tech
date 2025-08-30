"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/muhammadnoumansha140", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Consulting Services", href: "/consulting-services" },
    { name: "Success Stories", href: "/success" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#171717] shadow-md py-2" : "bg-transparent py-4"
      } ${openSans.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* <Image
              src={logo}
              alt="Logo"
              width={scrolled ? 100 : 140}
              height={scrolled ? 30 : 40}
              className="transition-all duration-300 object-contain"
            /> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  scrolled ? "text-[#f0a709]" : "text-[#f0a709]"
                } font-semibold hover:text-[#fff] transition-colors duration-200 relative group`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button
              onClick={openCalendly}
              className={`ml-6 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                scrolled
                  ? "bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black"
                  : "bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black "
              } shadow-lg hover:shadow-xl hover:translate-y-[-2px] flex items-center cursor-pointer`}
            >
              FREE CONSULTATION
              <FiArrowRight className="ml-2" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 mt-16 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                openCalendly();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#27A1F6] to-[#4370F3] text-white font-bold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
            >
              FREE CONSULTATION
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
