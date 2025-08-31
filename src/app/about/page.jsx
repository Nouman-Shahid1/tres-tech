"use client";
import React from "react";
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
import Footer from "@/components/Footer/Footer";
import ConsultingServices from "@/components/about services/services";
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

const AboutUs = () => {
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
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#100A1D] to-transparent"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-[#f0a709]/50 px-4 py-2 rounded-full mb-6">
              <FiUsers className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                INNOVATION DRIVEN
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Crafting the <span className="text-[#f0a709]">Digital</span>{" "}
              Future
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Tres Tech Global is a leading technology company dedicated to
              building cutting-edge solutions that transform businesses and
              empower communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <span>Explore Our Work</span>
              </button>
              <button className="bg-transparent border-2 hover:text-[#f0a709] hover:border-[#f0a709] border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Join Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Techneon team working"
                fill
                className="object-cover"
                priority
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-gray-600/60 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Our Humble Beginnings
                  </h3>
                  <p className="text-lg">
                    Founded in 2015 with just 3 people in a small garage.
                  </p>
                </div>
              </div> */}
            </div>
            <div>
              {/* <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
                OUR STORY
              </span> */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-6">
                From Startup to{" "}
                <span className="text-[#f0a709]">Industry Leader</span>
              </h2>
              <p className="text-lg text-white mb-6">
                What began as a small team with big dreams has grown into an
                award-winning technology company serving clients worldwide.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiTrendingUp className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709]">
                      Rapid Growth
                    </h3>
                    <p className="text-white">
                      Expanded from 3 to 150+ employees in just 5 years, with
                      offices in 3 countries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiAward className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709]">
                      Award Winning
                    </h3>
                    <p className="text-white">
                      Recognized by TechCrunch, Forbes, and Gartner for our
                      innovative solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiGlobe className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709]">
                      Global Impact
                    </h3>
                    <p className="text-white">
                      Our technologies power businesses in over 30 countries
                      across 5 continents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultingServices />
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-br from-[#0F0828] to-[#100A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1A1335] text-[#f0a709] px-6 py-3 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              OUR CORE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mission & <span className="text-[#f0a709]">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guiding principles that drive everything we do at Tres Tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#f0a709]/20 relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f0a709] to-transparent opacity-20 group-hover:opacity-30 transition-opacity rounded-xl"></div>
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10">
                <svg
                  className="w-6 h-6 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Our Mission
              </h3>
              <p className="text-gray-300 relative z-10">
                To empower businesses through innovative technology solutions
                that drive growth, efficiency, and digital transformation.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#f0a709]/20 relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f0a709] to-transparent opacity-20 group-hover:opacity-30 transition-opacity rounded-xl"></div>
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10">
                <svg
                  className="w-6 h-6 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Our Vision
              </h3>
              <p className="text-gray-300 relative z-10">
                A world where technology seamlessly enhances every aspect of
                business and daily life.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#f0a709]/20 relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f0a709] to-transparent opacity-20 group-hover:opacity-30 transition-opacity rounded-xl"></div>
              <div className="bg-[#f0a709] w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10">
                <svg
                  className="w-6 h-6 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Our Approach
              </h3>
              <p className="text-gray-300 relative z-10">
                Client-focused, agile development with cutting-edge technologies
                and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-[#0F0828] to-[#100A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1A1335] text-[#f0a709] px-6 py-3 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              TECHNOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#f0a709]">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the most modern and reliable technologies to deliver
              exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                icon: (
                  <div className="w-12 h-12 bg-[#61DAFB] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">React</span>
                  </div>
                ),
                name: "React",
                color: "bg-[#61DAFB]",
              },
              {
                icon: (
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      Next.js
                    </span>
                  </div>
                ),
                name: "Next.js",
                color: "bg-black",
              },
              {
                icon: (
                  <div className="w-12 h-12 bg-[#3178C6] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TS</span>
                  </div>
                ),
                name: "TypeScript",
                color: "bg-[#3178C6]",
              },
              {
                icon: (
                  <div className="w-12 h-12 bg-[#06B6D4] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CSS</span>
                  </div>
                ),
                name: "Tailwind",
                color: "bg-[#06B6D4]",
              },
              {
                icon: (
                  <div className="w-12 h-12 bg-[#339933] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Node</span>
                  </div>
                ),
                name: "Node.js",
                color: "bg-[#339933]",
              },
              {
                icon: (
                  <div className="w-12 h-12 bg-[#FF9900] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AWS</span>
                  </div>
                ),
                name: "AWS",
                color: "bg-[#FF9900]",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 group"
              >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="font-medium text-white text-center">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Additional tech showcase */}
          <div className="mt-16 bg-gradient-to-r from-[#1A1335] to-[#100A1D] rounded-2xl p-8 border border-[#f0a709]/20">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              And Many More Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Python",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "Docker",
                "Kubernetes",
                "Firebase",
                "Vue.js",
                "Angular",
                "Swift",
                "Kotlin",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#f0a709]/10 text-[#f0a709] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-4">
              Meet The Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A diverse team of passionate professionals driving innovation
              forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Maria Garcia",
                role: "CTO",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "James Wilson",
                role: "Lead Developer",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Sarah Chen",
                role: "UX Director",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#27A1F6] mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-500 hover:text-blue-700"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-500 hover:text-blue-400"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-500 hover:text-[#4370F3]"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white">
            Let&rsquo;s discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="bg-[#f0a709] text-black hover:bg-white hover:text-[#f0a709] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Consultation</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
            <Link
              href="/contact-us"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
