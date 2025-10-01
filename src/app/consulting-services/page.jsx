"use client";
import React, { useState, useEffect, useRef } from "react";
import { Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import {
  FiCode,
  FiHeadphones,
  FiPhone,
  FiCpu,
  FiBriefcase,
  FiPieChart,
  FiShare2,
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiTarget,
  FiUsers as FiTeam,
  FiUserPlus,
  FiUsers,
  FiClipboard,
  FiShoppingCart,
} from "react-icons/fi";
import { GrMultimedia } from "react-icons/gr";
import Footer from "@/components/Footer/Footer";
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

const consultingServices = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to fit your exact business needs, enhancing productivity and driving innovation.",
    icon: <FiCode className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "IT & Tech Support Services",
    description:
      "Offering a full spectrum of IT services, from system maintenance to troubleshooting, ensuring your operations run smoothly.",
    icon: (
      <FiHeadphones className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  },
  {
    title: "Call Center Solutions",
    description:
      "We provide end-to-end call center services that streamline customer interactions, enhance satisfaction, and optimize communication strategies.",
    icon: (
      <FiPhone className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Customized Dashboards & API Integrations",
    description:
      "Unlock the power of real-time data and analytics with our expertly designed dashboards and seamless API integrations, enabling smarter business decisions.",
    icon: (
      <FiPieChart className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Digital & Social Media Marketing",
    description:
      "Boost your brand's presence across digital platforms with our customized marketing strategies designed to engage customers and increase conversions.",
    icon: (
      <FiShare2 className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1643503640904-75c1a2093570?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI-Based Development",
    description:
      "Leverage the power of AI to automate processes, improve efficiency, and unlock data-driven insights that propel your business forward.",
    icon: <FiCpu className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />,
    image:
      "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Project Management Services",
    description:
      "From planning to execution, we ensure your projects are delivered on time and within budget, with continuous support throughout the project lifecycle.",
    icon: (
      <FiClipboard className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tech & Non-Tech Bench Sales Recruitment",
    description:
      "Providing top-tier recruitment services for both tech and non-tech roles, ensuring the right talent is placed in the right positions.",
    icon: (
      <FiUsers className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Placement Consultancy & Staff Augmentation",
    description:
      "Helping you find the perfect match for your team while providing support in workforce expansion, staff augmentation, and flexible resource allocation.",
    icon: (
      <FiUserPlus className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1641122669951-3e2aff778d3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-Commerce Development & Services Solutions",
    description:
      "we deliver comprehensive e-commerce solutions designed to help businesses build, scale, and succeed in the digital marketplace. From custom development to 24/7 support services and strategic digital marketing, we provide everything your business needs to stand out and grow online.",
    icon: (
      <FiShoppingCart className="w-6 h-6 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1726607424599-db0c41681494?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SaaS-Powered Media Discovery Solutions",
    description:
      "we create innovative platforms that help users legally discover where to watch their favorite movies, shows, music, and educational content. We provide accurate guidance to maximize subscriptions while ensuring full copyright compliance.",
    icon: (
      <GrMultimedia className="w-6 h-6 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1514471157964-06459a4b9241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasCounted = useRef(false);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true;

          let startTime = null;
          const startValue = 0;
          const endValue = end;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(
              easeOutQuart * (endValue - startValue) + startValue
            );

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration]);

  return <span ref={ref}>{formatNumberWithCommas(count)}</span>;
};
const ConsultingServices = () => {
  return (
    <div className={`${poppins.variable} ${openSans.variable} font-sans`}>
      {/* Hero Section */}
      <section
        className="relative w-full h-[130vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-600/80"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-[#f0a709]/50 px-4 py-2 rounded-full mb-6">
              <FiBriefcase className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                EXPERT CONSULTING
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Strategic <span className="text-[#f0a709]">Consulting</span>{" "}
              Services
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Transform your business with our expert consulting services
              designed to drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <span>Get Started</span>
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-[#f0a709] hover:border-[#f0a709] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-4">
              Our Products & Services
            </h2>
            <p className="text-lg text-[#dda224]  max-w-3xl mx-auto">
              We deliver measurable results through tailored solutions designed
              for your unique business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className="group bg-[#100A1D] border border-[#997e43] hover:border-[#f0a709] hover:bg-[#f0a709] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#645024] group-hover:bg-[#b87f04] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white group-hover:text-[#000]">
                    {service.description}
                  </p>
                  <Link
                    href="#contact-footer"
                    className="flex mt-10 items-center text-[#f8ac06] font-medium group-hover:text-[#fff] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        service.title ===
                        "E-Commerce Development & Services Solutions"
                      ) {
                        window.location.href =
                          "/consulting-services/ecommercesolutions";
                      } else if (
                        service.title ===
                        "SaaS-Powered Media Discovery Solutions"
                      ) {
                        window.location.href =
                          "/consulting-services/saas-powered-media";
                      } else if (
                        service.title ===
                        "Tech & Non-Tech Bench Sales Recruitment"
                      ) {
                        window.location.href =
                          "/consulting-services/recruitment";
                      } else {
                        document
                          .getElementById("contact-footer")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }
                    }}
                  >
                    <span>Discover now</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center w-full md:w-[45%] lg:w-[75%] mx-auto mt-12">
            {consultingServices1.map((service, index) => (
              <div
                key={index}
                className="group bg-[#100A1D] border border-[#997e43] hover:border-[#f0a709] hover:bg-[#f0a709] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-72 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#645024] group-hover:bg-[#b87f04] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white group-hover:text-[#000]">
                    {service.description}
                  </p>
                  <Link
                    href="#contact-footer"
                    className="flex mt-10 items-center text-[#f8ac06] font-medium group-hover:text-[#fff] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/#pricing-section";
                    }}
                  >
                    <span>Discover now</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f0a709]/30">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Consulting approach"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100A1D] to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Our Proven{" "}
                    <span className="text-[#f0a709]">Methodology</span>
                  </h3>
                  <p className="text-lg text-gray-300">
                    Data-driven insights combined with industry expertise.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block bg-[#1A1335] text-[#f0a709] px-6 py-3 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
                OUR APPROACH
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strategic <span className="text-[#f0a709]">Consulting</span>{" "}
                Process
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our structured approach ensures we deliver measurable results
                for every client engagement.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#1A1335] rounded-xl hover:bg-[#1A1335]/80 transition-colors duration-300">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <span className="text-[#100A1D] text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Discovery
                    </h3>
                    <p className="text-gray-300">
                      Deep dive into your business challenges, goals, and market
                      position.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#1A1335] rounded-xl hover:bg-[#1A1335]/80 transition-colors duration-300">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <span className="text-[#100A1D] text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Analysis
                    </h3>
                    <p className="text-gray-300">
                      Comprehensive data collection and strategic assessment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#1A1335] rounded-xl hover:bg-[#1A1335]/80 transition-colors duration-300">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <span className="text-[#100A1D] text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Solution Design
                    </h3>
                    <p className="text-gray-300">
                      Customized recommendations tailored to your specific
                      needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#1A1335] rounded-xl hover:bg-[#1A1335]/80 transition-colors duration-300">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <span className="text-[#100A1D] text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Implementation Support
                    </h3>
                    <p className="text-gray-300">
                      Hands-on assistance to ensure successful execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-[#0F0828] to-[#100A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1A1335] text-[#f0a709] px-6 py-3 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Benefits of Our{" "}
              <span className="text-[#f0a709]">Consulting Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us to unlock your business's full potential with
              innovative solutions.
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
                Industry Expertise
              </h3>
              <p className="text-gray-300 relative z-10">
                Our consultants bring deep industry knowledge and best practices
                from working with hundreds of clients across diverse sectors.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Customized Solutions
              </h3>
              <p className="text-gray-300 relative z-10">
                We don't believe in one-size-fits-all approaches. Every solution
                is tailored to your specific business context and objectives.
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Measurable Results
              </h3>
              <p className="text-gray-300 relative z-10">
                We focus on delivering tangible outcomes with clear KPIs and
                metrics to track progress and ROI.
              </p>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 1000, label: "Projects Completed", suffix: "+" },
              { number: 98, label: "Client Satisfaction", suffix: "%" },
              { number: 8, label: "Years Experience", suffix: "+" },
              { number: 50, label: "Industry Experts", suffix: "+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#f0a709] mb-2">
                  <Counter end={stat.number} duration={2000} />
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Schedule a free consultation with our experts to discuss your
            challenges and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className="bg-[#f0a709] text-black cursor-pointer hover:bg-white hover:text-[#f0a709] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Contact Us</span>
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConsultingServices;
