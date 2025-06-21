// pages/index.js
"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/navbar";
import ConsultingServices from "@/components/services/services";
import { Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import {
  FiUsers,
  FiAward,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiCode,
} from "react-icons/fi";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

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

export default function Home() {
  const openCalendly = () => {
    window.open("https://calendly.com/muhammadnoumansha140", "_blank");
  };

  return (
    <div className={`${poppins.variable} ${openSans.variable} font-sans`}>
      {/* Hero Section */}
      <section
        className="relative w-full h-[130vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/hero-free-img.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-600/80"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <FiUsers className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                BUSINESS CONSULTING
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Strong business <span className="text-blue-300">strategy</span> to
              grow
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              We help small business owners and professionals to get things done
              right. Tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCalendly}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Get Started</span>
              </button>
              <Link
                href="/contact-us"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/about-01.jpg"
                alt="Business consulting"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-6">
                We empower businesses through{" "}
                <span className="text-blue-500">cutting-edge technology</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Techneon is a forward-thinking technology company dedicated to
                helping businesses transform and thrive in the digital age. We
                specialize in innovative software solutions, AI-driven
                applications, and strategic digital transformation services that
                propel your business forward.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of expert developers, designers, and strategists work
                collaboratively to deliver tailored solutions that address your
                unique challenges and unlock new opportunities for growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <FiTrendingUp className="text-[#27A1F6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Growth</h3>
                    <p className="text-gray-600">
                      We help you identify and capitalize on growth
                      opportunities in your market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <FiAward className="text-[#27A1F6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Proven Strategies
                    </h3>
                    <p className="text-gray-600">
                      Our methods are tested and proven to deliver results for
                      businesses like yours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <FiGlobe className="text-[#27A1F6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Global Perspective
                    </h3>
                    <p className="text-gray-600">
                      We bring international best practices to help you compete
                      at the highest level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultingServices />

      {/* Case Study Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
                CASE STUDY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-6">
                Capital Co. jump-starts growth with return to core strategies
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Facing market challenges, Capital Co. achieved significant
                growth by refocusing on its core business strategies. By
                returning to its foundational goals, the company streamlined
                operations and boosted efficiency.
              </p>
              <button
                onClick={openCalendly}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>See All Case Studies</span>
              </button>
            </div>
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/bg-13-free-img-1.jpg"
                alt="Case study"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-4">
              What Our <span className="text-blue-500">Clients</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our consulting services have transformed businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The business strategy provided helped us double our revenue in just 6 months. Absolutely transformative!",
                name: "Emily Smith",
                role: "CEO, TechStart Inc.",
                image: "https://randomuser.me/api/portraits/women/43.jpg",
              },
              {
                quote:
                  "Their insights into our operations helped us cut costs by 30% while improving efficiency. Game changing!",
                name: "Michael Johnson",
                role: "COO, RetailCorp",
                image: "https://randomuser.me/api/portraits/men/34.jpg",
              },
              {
                quote:
                  "The team understood our challenges immediately and delivered solutions that actually worked in practice.",
                name: "Sarah Williams",
                role: "Director, Global Finance",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="bg-white text-[#27A1F6] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Consultation</span>
            </button>
            <Link
              href="/contact-us"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
