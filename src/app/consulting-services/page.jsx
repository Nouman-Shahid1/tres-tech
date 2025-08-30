"use client";
import React from "react";
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
} from "react-icons/fi";
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
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
  },
  {
    title: "Project Management Services",
    description:
      "From planning to execution, we ensure your projects are delivered on time and within budget, with continuous support throughout the project lifecycle.",
    icon: (
      <FiClipboard className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
  },
  {
    title: "Tech & Non-Tech Bench Sales Recruitment",
    description:
      "Providing top-tier recruitment services for both tech and non-tech roles, ensuring the right talent is placed in the right positions.",
    icon: (
      <FiUsers className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
  },
  {
    title: "Placement Consultancy & Staff Augmentation",
    description:
      "Helping you find the perfect match for your team while providing support in workforce expansion, staff augmentation, and flexible resource allocation.",
    icon: (
      <FiUserPlus className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
  },
];

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Consulting approach"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-gray-600/60 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Our Proven Methodology
                  </h3>
                  <p className="text-lg">
                    Data-driven insights combined with industry expertise.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
                OUR APPROACH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-6">
                Strategic <span className="text-blue-500">Consulting</span>{" "}
                Process
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our structured approach ensures we deliver measurable results
                for every client engagement.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-[#27A1F6] text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery</h3>
                    <p className="text-gray-600">
                      Deep dive into your business challenges, goals, and market
                      position.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-[#27A1F6] text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analysis</h3>
                    <p className="text-gray-600">
                      Comprehensive data collection and strategic assessment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-[#27A1F6] text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                    <p className="text-gray-600">
                      Customized recommendations tailored to your specific
                      needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-[#27A1F6] text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Implementation Support
                    </h3>
                    <p className="text-gray-600">
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
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4370F3] mb-4">
              Benefits of Our Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with us to unlock your business&apos;s full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Our consultants bring deep industry knowledge and best practices
                from working with hundreds of clients across diverse sectors.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We don't believe in one-size-fits-all approaches. Every solution
                is tailored to your specific business context and objectives.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
              <p className="text-gray-600">
                We focus on delivering tangible outcomes with clear KPIs and
                metrics to track progress and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-[#f0a709]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Schedule a free consultation with our experts to discuss your
            challenges and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingServices;
