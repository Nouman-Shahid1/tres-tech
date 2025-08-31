"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiFilm,
  FiMusic,
  FiBookOpen,
  FiTv,
  FiCheck,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";
import Footer from "@/components/Footer/Footer";

const MediaDiscoverySolutions = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Standard Plan",
      price: billingCycle === "monthly" ? "$200/month" : "$4,400/year",
      originalPrice: billingCycle === "yearly" ? "$4,800" : null,
      savings: billingCycle === "yearly" ? "Save 15%" : null,
      features: [
        "Custom dashboard development",
        "API integrations (up to 5)",
        "Basic analytics and reporting",
        "Standard support (business hours)",
        "Monthly maintenance",
      ],
      cta: "GET STARTED",
      popular: false,
    },
    {
      name: "Premium Plan",
      price: billingCycle === "monthly" ? "$350/month" : "$5,000/year",
      originalPrice: billingCycle === "yearly" ? "$6,000" : null,
      savings: billingCycle === "yearly" ? "Save 20%" : null,
      features: [
        "Advanced custom dashboard",
        "Unlimited API integrations",
        "Advanced analytics & AI insights",
        "Priority 24/7 support",
        "Weekly maintenance & updates",
        "Custom feature development",
        "Dedicated account manager",
      ],
      cta: "GET STARTED",
      popular: true,
    },
  ];

  const solutions = [
    {
      icon: <FiFilm className="w-8 h-8 text-[#100A1D]" />,
      title: "Movie & TV Show Discovery App",
      description:
        "Platform providing up-to-date information on movies and TV shows, including trailers, ratings, reviews, cast details, and release dates.",
      pricing: "Free + Premium ($15/month for ad-free experience)",
    },
    {
      icon: <FiTv className="w-8 h-8 text-[#100A1D]" />,
      title: "Media Library Manager",
      description:
        "User-friendly tool to help organize and manage legally owned movies, music, and videos without hosting or distributing content.",
      pricing: "$40 one-time license OR $15/month subscription",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-[#100A1D]" />,
      title: "Streaming Companion App",
      description:
        "App that aggregates and shows where users can legally stream trending content from platforms like Netflix, Hulu, Disney+, and more.",
      pricing: "$15/month or $150/year",
    },
    {
      icon: <FiBookOpen className="w-8 h-8 text-[#100A1D]" />,
      title: "Royalty-Free Video Clips Library",
      description:
        "Curated library of royalty-free stock videos in categories such as nature, travel, fitness, and cooking.",
      pricing: "$15/month or $150/year",
    },
    {
      icon: <FiMusic className="w-8 h-8 text-[#100A1D]" />,
      title: "Podcast & Radio Discovery Hub",
      description:
        "Platform that aggregates legal podcasts and radio stations from around the world by category.",
      pricing: "Free samples + Pro ($20/month)",
    },
    {
      icon: <FiHeart className="w-8 h-8 text-[#100A1D]" />,
      title: "E-Learning Content Discovery",
      description:
        "Educational discovery platform offering information on where to stream online tutorials, courses, and fitness programs.",
      pricing: "Subscription tiers ($10/month – $30/month)",
    },
    {
      icon: <FiFilm className="w-8 h-8 text-[#100A1D]" />,
      title: "Virtual Cinema Club (Watch Parties)",
      description:
        "Platform allowing users to sync legal movie watch parties with friends, enhancing group viewing experience.",
      pricing: "$20/month subscription",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-[#100A1D]" />,
      title: "Fitness & Wellness Content Discovery",
      description:
        "Easy way to discover streaming platforms offering yoga, gym workouts, meditation videos, and dance classes.",
      pricing: "$20/month",
    },
    {
      icon: <FiHeart className="w-8 h-8 text-[#100A1D]" />,
      title: "Kids Educational & Edutainment Discovery Hub",
      description:
        "Dedicated platform to help parents discover educational and entertaining content for children.",
      pricing: "$25/month family subscription",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] text-white">
        {/* Hero Section */}
        <div
          className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(15, 8, 40, 0.85)",
          }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#f0a709]">SaaS</span>-Powered Media{" "}
              <br></br>Discovery{" "}
              <span className="text-[#f0a709]">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Innovative platforms designed to help users discover and explore
              their favorite content across legal streaming platforms
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => (window.location.href = "/contact-us")}
                className="bg-[#f0a709] cursor-pointer hover:text-[#e09808] hover:bg-[#fff] text-[#100A1D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-28 relative z-10">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl shadow-2xl p-8 md:p-12 border border-[#f0a709]/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-6">
                <FiFilm className="w-8 h-8 text-[#100A1D]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                SaaS-Powered Media Discovery Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                At Tres Tech Global, we specialize in providing innovative
                platforms designed to help users discover and explore their
                favorite content across legal streaming platforms. Our services
                focus on offering comprehensive, accurate information about
                where to watch movies, TV shows, music, and educational content.
              </p>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-6">
                We empower users to make the most of their subscriptions,
                guiding them to the content they love while ensuring full
                compliance with copyright laws. All our solutions are built on
                scalable SaaS architecture for reliability and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Media Discovery{" "}
              <span className="text-[#f0a709]">Solutions</span>
            </h2>
            <div className="h-1 w-24 bg-[#f0a709] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl p-8 border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-all duration-300 h-full"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="mt-auto">
                  <p className="text-[#f0a709] font-semibold">
                    {solution.pricing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl shadow-2xl p-8 md:p-12 border border-[#f0a709]/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our{" "}
                <span className="text-[#f0a709]">Media Solutions</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    100% Legal & Compliant
                  </h3>
                  <p className="text-gray-300">
                    All our solutions guide users to legitimate streaming
                    sources, ensuring full copyright compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Comprehensive Content Database
                  </h3>
                  <p className="text-gray-300">
                    Our platforms aggregate data from thousands of legal sources
                    for the most complete discovery experience
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    User-Centric Design
                  </h3>
                  <p className="text-gray-300">
                    Intuitive interfaces that make content discovery effortless
                    and enjoyable for all users
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f0a709] rounded-full p-2 mr-4 flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-[#100A1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    SaaS-Powered Scalability
                  </h3>
                  <p className="text-gray-300">
                    Cloud-based architecture ensures your platform can grow with
                    your user base without performance issues
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const pricingSection =
                    document.getElementById("pricing-section");
                  pricingSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#f0a709] hover:bg-[#fff] hover:text-[#f0a709] cursor-pointer text-[#100A1D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div
          id="pricing-section"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing <span className="text-[#f0a709]">Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible and scalable pricing for Customized Dashboards & API
              Integrations
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-[#1A1335] rounded-full p-1 mt-8">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-[#f0a709] text-[#100A1D]"
                    : "text-gray-300"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-[#f0a709] text-[#100A1D]"
                    : "text-gray-300"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly (Save 15-20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 
                  ${
                    plan.popular
                      ? "transform scale-105 shadow-2xl border-2 border-[#f0a709]"
                      : "border border-gray-700 shadow-xl"
                  } 
                  hover:shadow-2xl hover:scale-101`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1335] to-[#100A1D] opacity-95"></div>

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-[#f0a709] text-[#100A1D] font-bold px-3 py-1 text-xs rounded-full shadow-lg uppercase tracking-wide">
                      BEST VALUE
                    </div>
                  </div>
                )}

                <div className="relative p-8 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center items-baseline">
                      <span className="text-5xl font-bold text-[#f0a709]">
                        {plan.price}
                      </span>
                    </div>
                    {/* <p className="text-gray-400 text-sm mt-2">
                      {billingCycle === "monthly"
                        ? "per month"
                        : `billed annually as ${plan.price}`}
                    </p> */}
                    {plan.savings && (
                      <p className="text-[#f0a709] text-sm mt-1">
                        {plan.savings} compared to monthly billing
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-[#f0a709] flex-shrink-0 mr-3 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => (window.location.href = "/contact-us")}
                    className={`w-full py-3 font-semibold rounded-lg transition-all duration-300  cursor-pointer
                      ${
                        plan.popular
                          ? "bg-[#f0a709] text-[#100A1D] hover:bg-[#e09808] hover:shadow-lg"
                          : "bg-transparent text-[#f0a709] border-2 border-[#f0a709] hover:bg-[#f0a709] hover:text-[#100A1D]"
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MediaDiscoverySolutions;
