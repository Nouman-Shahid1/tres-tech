"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
    { name: "About", href: "/about" },
    { name: "Products & Services ", href: "/consulting-services" },
    // { name: "Success Stories", href: "/success" },
    { name: "Contact", href: "/contact-us" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#171717] shadow-md py-2" : "bg-transparent py-4"
      } ${openSans.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={scrolled ? 200 : 240}
              height={scrolled ? 30 : 50}
              className="transition-all duration-300 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-white font-bold"
                      : scrolled
                      ? "text-[#f0a709]"
                      : "text-[#f0a709]"
                  } font-semibold hover:text-white transition-colors duration-200 relative group`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
            <button
              onClick={openCalendly}
              className={`ml-6 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                scrolled
                  ? "bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black"
                  : "bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black"
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
              className={`inline-flex items-center justify-center p-2 rounded-md ${
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
          className={`md:hidden fixed inset-0 bg-[#171717] z-40 mt-16 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-4 text-lg font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-[#f0a709]/20"
                      : "text-gray-300 hover:bg-[#f0a709]/10 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  {isActive && (
                    <span className="ml-2 w-2 h-2 bg-[#f0a709] rounded-full inline-block"></span>
                  )}
                </Link>
              );
            })}
            <button
              onClick={() => {
                openCalendly();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#f0a709] to-[#ffbf4d] text-black font-bold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
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
