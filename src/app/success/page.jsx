"use client";
import React from "react";
import { Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import {
  FiUsers,
  FiAward,
  FiGlobe,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: "Revolutionizing E-commerce for Fashion Retailer",
      description:
        "Helped a leading fashion brand increase online sales by 240% through a custom-built e-commerce platform with AI-powered recommendations.",
      results: [
        "240% increase in online sales",
        "35% improvement in conversion rates",
        "50% reduction in cart abandonment",
      ],
      logo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "E-commerce",
    },
    {
      id: 2,
      title: "Digital Transformation for Healthcare Provider",
      description:
        "Implemented a comprehensive patient management system that reduced administrative costs by 45% and improved patient satisfaction scores.",
      results: [
        "45% reduction in administrative costs",
        "30% faster patient processing",
        "92% patient satisfaction rate",
      ],
      logo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Healthcare",
    },
    {
      id: 3,
      title: "Banking App with 1M+ Users",
      description:
        "Developed a mobile banking application that acquired over 1 million users in its first year with industry-leading security features.",
      results: [
        "1M+ users in first year",
        "99.99% uptime",
        "Zero security breaches",
      ],
      logo: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Fintech",
    },
    {
      id: 4,
      title: "Supply Chain Optimization Platform",
      description:
        "Created an AI-driven logistics platform that reduced delivery times by 40% and saved our client $12M annually in operational costs.",
      results: [
        "40% faster deliveries",
        "$12M annual savings",
        "98% on-time delivery rate",
      ],
      logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Logistics",
    },
  ];

  return (
    <div className={`${poppins.variable} ${openSans.variable} font-sans`}>
      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-600/80"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <FiStar className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                PROVEN RESULTS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Success <span className="text-blue-300">Stories</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Discover how Tres-Tech has helped businesses transform through
              innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <span>View Case Studies</span>
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-4">
              Transforming Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world solutions delivering measurable impact for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                      <div className="relative w-16 h-16">
                        <Image
                          src={story.logo}
                          alt="Client logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#4370F3] mb-4">
                      {story.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {story.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {story.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                              <FiTrendingUp className="text-[#27A1F6] text-sm" />
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                      <span>Read Full Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl font-bold text-[#4370F3] mb-3">150+</div>
              <h3 className="text-xl font-bold mb-2">Satisfied Clients</h3>
              <p className="text-gray-600">
                Across various industries worldwide
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl font-bold text-[#4370F3] mb-3">
                $1.2B
              </div>
              <h3 className="text-xl font-bold mb-2">Revenue Generated</h3>
              <p className="text-gray-600">
                For our clients through our solutions
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl font-bold text-[#4370F3] mb-3">98%</div>
              <h3 className="text-xl font-bold mb-2">Client Retention</h3>
              <p className="text-gray-600">
                Year-over-year customer satisfaction
              </p>
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from the businesses we've transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">CEO, FashionForward</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Tres-Tech&apos;s e-commerce platform transformed our online
                sales. Their team understood our vision and delivered beyond
                expectations. The 240% increase in sales speaks for itself."
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">
                    CTO, HealthFirst Systems
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The patient management system Tres-Tech built for us has been
                game-changing. Our staff is more efficient, and patients love
                the new digital experience. A true partner in every sense."
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Lisa Rodriguez</h4>
                  <p className="text-gray-500 text-sm">
                    COO, Global Logistics Inc.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The supply chain optimization platform delivered $12M in annual
                savings. Tres-Tech&apos;s expertise in AI and logistics was
                evident throughout the project. Exceptional results and
                partnership."
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss how we can help you achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#27A1F6] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <span>Get Started</span>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>View All Case Studies</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
