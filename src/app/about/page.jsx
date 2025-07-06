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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-600/80"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <FiUsers className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                INNOVATION DRIVEN
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Crafting the <span className="text-blue-300">Digital</span> Future
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              TechNeon is a leading technology company dedicated to building
              cutting-edge solutions that transform businesses and empower
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <span>Explore Our Work</span>
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Join Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-gray-600/60 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Our Humble Beginnings
                  </h3>
                  <p className="text-lg">
                    Founded in 2015 with just 3 people in a small garage.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-6">
                From Startup to{" "}
                <span className="text-blue-500">Industry Leader</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small team with big dreams has grown into an
                award-winning technology company serving clients worldwide.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <FiTrendingUp className="text-[#27A1F6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid Growth</h3>
                    <p className="text-gray-600">
                      Expanded from 3 to 150+ employees in just 5 years, with
                      offices in 3 countries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <FiAward className="text-[#27A1F6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Award Winning</h3>
                    <p className="text-gray-600">
                      Recognized by TechCrunch, Forbes, and Gartner for our
                      innovative solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <FiGlobe className="text-[#27A1F6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                    <p className="text-gray-600">
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

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
              OUR CORE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-4">
              Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive everything we do at TechNeon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiLayers className="text-[#27A1F6] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through innovative technology solutions
                that drive growth, efficiency, and digital transformation.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-[#27A1F6] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A world where technology seamlessly enhances every aspect of
                business and daily life.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FiCode className="text-[#27A1F6] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Approach</h3>
              <p className="text-gray-600">
                Client-focused, agile development with cutting-edge technologies
                and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
              TECHNOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-4">
              Our Tech Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with the most modern and reliable technologies to deliver
              exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                icon: <FaReact className="text-4xl text-blue-500" />,
                name: "React",
              },
              {
                icon: <SiNextdotjs className="text-4xl text-[#4370F3]" />,
                name: "Next.js",
              },
              {
                icon: <SiTypescript className="text-4xl text-[#27A1F6]" />,
                name: "TypeScript",
              },
              {
                icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
                name: "Tailwind",
              },
              {
                icon: <FaNodeJs className="text-4xl text-green-600" />,
                name: "Node.js",
              },
              {
                icon: <FaAws className="text-4xl text-orange-500" />,
                name: "AWS",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="font-medium text-gray-700">{tech.name}</h3>
              </div>
            ))}
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
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss how TechNeon can help you achieve your digital
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#27A1F6] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <span>Get Started</span>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
