"use client";
import React from "react";
import { Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import {
  FiCode,
  FiLinkedin,
  FiFileText,
  FiPhone,
  FiTrendingUp,
  FiCalendar,
  FiBriefcase,
  FiCheckCircle,
  FiStar,
  FiUsers,
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

const coreServices = [
  {
    title: "ATS-Friendly Resume Creation",
    description:
      "Professionally crafted, keyword-optimized resumes tailored to pass applicant tracking systems and attract recruiter attention.",
    icon: (
      <FiFileText className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Strategic profile enhancement to boost visibility, credibility, and engagement with hiring managers and recruiters.",
    icon: (
      <FiLinkedin className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
  {
    title: "Job Portal Profile Creation",
    description:
      "Setup and optimization on 53+ job portals, including Dice, Monster, CareerBuilder, and Indeed, ensuring maximum reach.",
    icon: <FiCode className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />,
  },
  {
    title: "Technical & Screening Calls",
    description:
      "We conduct initial technical and screening calls on your behalf to assess job fit and qualify your profile for relevant opportunities.",
    icon: (
      <FiPhone className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
  {
    title: "Active Profile Marketing",
    description:
      "Your profile is actively marketed to our network of recruiters, hiring partners, and vendors to ensure targeted outreach and visibility.",
    icon: (
      <FiTrendingUp className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
  {
    title: "Interview Scheduling & Backend Support",
    description:
      "We manage the entire interview coordination process, ensuring alignment with your availability and career goals.",
    icon: (
      <FiCalendar className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
  {
    title: "Job Onboarding Support",
    description:
      "From offer acceptance to onboarding, we provide full support to ensure a smooth transition into your new role.",
    icon: (
      <FiBriefcase className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
  {
    title: "Weekly Updates & Results Sharing",
    description:
      "We keep you informed with weekly progress reports, including recruiter feedback, interview status, and marketing reach—ensuring full transparency.",
    icon: (
      <FiCheckCircle className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]" />
    ),
  },
];

const Recruitment = () => {
  return (
    <div className={`${poppins.variable} ${openSans.variable} font-sans`}>
      {/* Hero Section */}
      <section
        className="relative w-full h-[130vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-600/80"></div>
        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl my-36">
            <div className="inline-flex items-center bg-[#f0a709]/50 px-4 py-2 rounded-full mb-6">
              <FiUsers className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                TECH & NON-TECH RECRUITMENT
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Tech & Non-Tech{" "}
              <span className="text-[#f0a709]">Recruitment</span> Services
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Accelerate your career with our comprehensive recruitment services
              designed for both technical and non-technical professionals across
              all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <span>Get Started</span>
              </button>
              <Link
                href="/contact-us"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-[#f0a709] hover:border-[#f0a709] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-4">
              Our Core Services Include
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Comprehensive recruitment services designed to accelerate your
              career in both technical and non-technical fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 relative"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#f0a709] opacity-5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#f0a709] opacity-5 rounded-tr-full"></div>

                <div className="bg-[#645024] group-hover:bg-[#b87f04] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0a709] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-6">
              Successful Candidate Placements
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We&apos;ve successfully placed our talented candidates at these
              top-tier companies, helping professionals advance their careers
              while meeting our clients&apos; staffing needs.
            </p>
          </div>

          {/* Marquee with Beautiful Cards */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee hover:pause-animation whitespace-nowrap">
              <div className="flex items-center space-x-8 mx-4">
                {[
                  "JPMorgan Chase & Co.",
                  "Capital One",
                  "Bank of America",
                  "Goldman Sachs",
                  "Wells Fargo",
                  "Citigroup",
                  "Morgan Stanley",
                  "American Express",
                  "Microsoft",
                  "Google",
                  "Amazon",
                  "Apple",
                  "Meta",
                  "Tesla",
                  "Netflix",
                  "Salesforce",
                  "Oracle",
                  "IBM",
                  "Accenture",
                  "Deloitte",
                ].map((company, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 relative min-w-[280px] flex-shrink-0"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#f0a709] opacity-5 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#f0a709] opacity-5 rounded-tr-full"></div>

                    <div className="text-center relative z-10">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {company}
                      </h3>
                      <div className="w-12 h-1 bg-[#f0a709] mx-auto rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-8 mx-4">
                {[
                  "JPMorgan Chase & Co.",
                  "Capital One",
                  "Bank of America",
                  "Goldman Sachs",
                  "Wells Fargo",
                  "Citigroup",
                  "Morgan Stanley",
                  "American Express",
                  "Microsoft",
                  "Google",
                  "Amazon",
                  "Apple",
                  "Meta",
                  "Tesla",
                  "Netflix",
                  "Salesforce",
                  "Oracle",
                  "IBM",
                  "Accenture",
                  "Deloitte",
                ].map((company, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 relative min-w-[280px] flex-shrink-0"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#f0a709] opacity-5 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#f0a709] opacity-5 rounded-tr-full"></div>

                    <div className="text-center relative z-10">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {company}
                      </h3>
                      <div className="w-12 h-1 bg-[#f0a709] mx-auto rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-[#0F0828] to-[#100A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1A1335] text-[#f0a709] px-6 py-3 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              PRICING PLANS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Job Guarantee Recruitment{" "}
              <span className="text-[#f0a709]">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Both pricing plans come with job guarantee. We&apos;ve designed
              flexible pricing plans to help you secure your dream job with
              transparency and maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essential Plan */}
            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  JOB GUARANTEE
                </span>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f0a709] opacity-5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#f0a709] opacity-5 rounded-tr-full"></div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Essential Plan
                </h3>
                <p className="text-gray-300">
                  Perfect for professionals looking to kick-start their
                  recruitment journey with job guarantee.
                </p>
              </div>

              <div className="mb-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#f0a709] mb-2">
                    $1,050
                  </div>
                  <div className="text-gray-300">Total for 3 Months</div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>One-Time Subscription (Not Refundable):</span>
                    <span className="text-[#f0a709] font-semibold">$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Fee:</span>
                    <span className="text-[#f0a709] font-semibold">$300</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total (3 Months):</span>
                      <span className="text-[#f0a709]">$1,050</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    ATS-Friendly Resume Creation
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    LinkedIn Profile Optimization
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Job Portal Profile Creation
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Active Profile Marketing
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Technical & Screening Calls
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Interview Scheduling
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Interview Backend Support
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Job Onboarding Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#f0a709] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#f0a709] text-black px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  JOB GUARANTEE
                </span>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f0a709] opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#f0a709] opacity-10 rounded-tr-full"></div>

              <div className="mb-6 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Premium Advantage
                </h3>
                <p className="text-gray-300">
                  Designed for professionals who want priority support and a
                  full-service recruitment solution with job guarantee.
                </p>
              </div>

              <div className="mb-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#f0a709] mb-2">
                    $850
                  </div>
                  <div className="text-gray-300">
                    One-Time Subscription (Not Refundable)
                  </div>
                  <div className="text-green-400 text-sm font-semibold mt-1">
                    Save $200 vs Essential Plan
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Everything Included:
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <FiStar className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    <span className="text-[#f0a709] font-semibold">
                      Prioritized Access to All Services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    ATS-Friendly Resume Creation
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    LinkedIn Profile Optimization
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Job Portal Profile Creation & Visibility
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Active Profile Marketing
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Direct Client & Prime Vendor Outreach
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Technical & Screening Calls
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Interview Scheduling & Training
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Interview Backend Support
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Job Onboarding Support
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Documentation & Clearance Support
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    Weekly Progress Reports
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl border border-gray-800 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#f0a709] opacity-5 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold text-[#f0a709] mb-6 text-center">
              Why Choose Tres Tech Global?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    <span>
                      <strong className="text-white">
                        Proven Track Record:
                      </strong>{" "}
                      Success in job placements and backend support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    <span>
                      <strong className="text-white">
                        Guaranteed Results:
                      </strong>{" "}
                      Interviews according to your job profile
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    <span>
                      <strong className="text-white">Dedicated Support:</strong>{" "}
                      Personal recruitment and training assistance
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    <span>
                      <strong className="text-white">Full Transparency:</strong>{" "}
                      Weekly progress updates and clear communication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#f0a709] mr-3 mt-0.5 flex-shrink-0" />{" "}
                    <span>
                      <strong className="text-white">Extensive Network:</strong>{" "}
                      Access to recruiters, prime vendors, and direct clients
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl mb-8 text-white">
            Let&apos;s discuss how we can help you land your dream role in tech
            or non-tech fields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-[#f0a709] text-black hover:bg-white hover:text-[#f0a709] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Get Started Today</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruitment;
