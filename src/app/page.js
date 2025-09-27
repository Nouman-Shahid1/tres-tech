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
  FiBarChart2,
  FiCpu,
  FiPieChart,
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
import TestimonialSlider from "@/components/testimonial/testimonial";
import PricingSection from "@/components/pricingSection/pricingsection";

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
      <section
        className="relative w-full min-h-screen bg-cover bg-center pb-16"
        style={{
          backgroundImage:
            "url('https://thewebcraftsolutions.com/wp-content/uploads/2023/10/h10-bg-3.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-32">
          <div className="w-full lg:w-1/2 relative flex ">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                loading="lazy"
                decoding="async"
                src="https://thewebcraftsolutions.com/wp-content/uploads/2023/10/h10-banner-1.png"
                className="w-full h-auto"
                alt="Business consulting illustration"
              />

              <div className="absolute -bottom-[7%] sm:bottom-0 left-[14%] sm:left-1/4 mb-4 lg:mb-0 p-3 lg:p-4 bg-white rounded-[40px] lg:rounded-[50px] shadow-md flex items-center w-4/5 max-w-xs">
                <div className="flex space-x-1 lg:space-x-2">
                  <img
                    src="https://thewebcraftsolutions.com/wp-content/uploads/2023/07/team-02-55x55.jpg"
                    alt="Client 1"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                  />
                  <img
                    src="https://thewebcraftsolutions.com/wp-content/uploads/2023/07/team-04-55x55.jpg"
                    alt="Client 2"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-2 lg:ml-4 flex-1">
                  <p className="text-xs lg:text-sm font-semibold text-gray-700">
                    Happy Clients & Rating
                  </p>
                  <div className="flex items-center space-x-1 lg:space-x-2 text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 lg:w-5 lg:h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 15.27l4.14 2.22-1.15-4.95 3.81-3.3-5.04-.43L10 2.47 7.24 9.81 2.2 10.24l3.81 3.3-1.15 4.95L10 15.27z" />
                    </svg>
                    <span className="text-sm lg:text-lg font-bold">4.8</span>
                    <span className="text-xs lg:text-sm text-gray-500">
                      (8,090)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-16 md:mt-0 text-white text-center lg:text-left mb-10 lg:mb-0">
            {/* <div className="inline-flex items-center bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <FiUsers className="mr-2" />
              <span className="text-sm font-medium tracking-wider">
                BUSINESS CONSULTING
              </span>
            </div> */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight mb-6">
              Where Technology{" "}
              <span className="text-[#f0a709]">Meets Strategy</span> for
              Unmatched Business Growth
            </h1>
            <p className="text-lg md:text-xl lg:text-lg mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
              At Tres Tech Global, we blend innovative technology with strategic
              insights to help businesses unlock their full potential. Our
              solutions are crafted to not only address immediate challenges but
              also drive long-term growth. From custom software development to
              AI-driven strategies, we empower your business to stay ahead in an
              ever-evolving digital landscape. Partner with us to achieve
              excellence, streamline operations, and accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openCalendly}
                className="bg-white text-[#f0a709] hover:bg-[#f0a709] hover:text-black font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Get Started</span>
              </button>
              <Link
                href="/contact-us"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white  hover:text-[#f0a709] hover:border-[#f0a709] font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* Image Content */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
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
              {/* <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
                ABOUT US
              </span> */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-6">
                Where Technology Meets Strategy for Unmatched Business Growth
              </h2>
              <p className="text-lg text-white mb-6">
                At Tres Tech Global, we seamlessly integrate cutting-edge
                technology with strategic expertise to help businesses reach
                their highest potential. Our tailored solutions are designed to
                tackle both short-term challenges and fuel sustainable growth.
                Whether it&apos;s custom software development or AI-driven
                strategies, we equip your business to thrive in an ever-evolving
                digital world. Collaborate with us to achieve operational
                excellence, optimize performance, and drive long-term success.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiTrendingUp className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709] ">
                      Business Growth
                    </h3>
                    <p className="text-white">
                      We help you identify and capitalize on growth
                      opportunities in your market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiAward className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709] ">
                      Proven Strategies
                    </h3>
                    <p className="text-white">
                      Our methods are tested and proven to deliver results for
                      businesses like yours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiGlobe className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709] ">
                      Global Perspective
                    </h3>
                    <p className="text-white">
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

      {/* Trusted Partners Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
            We&apos;re proud to partner with some of America&apos;s most prestigious companies, 
            delivering innovative solutions that drive success across industries.
          </p>
          
          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-16 mx-8">
                <span className="text-2xl font-bold text-white">JPMorgan Chase & Co.</span>
                <span className="text-2xl font-bold text-white">Capital One</span>
                <span className="text-2xl font-bold text-white">Bank of America</span>
                <span className="text-2xl font-bold text-white">Goldman Sachs</span>
                <span className="text-2xl font-bold text-white">Wells Fargo</span>
                <span className="text-2xl font-bold text-white">Citigroup</span>
                <span className="text-2xl font-bold text-white">Morgan Stanley</span>
                <span className="text-2xl font-bold text-white">American Express</span>
              </div>
              <div className="flex items-center space-x-16 mx-8">
                <span className="text-2xl font-bold text-white">JPMorgan Chase & Co.</span>
                <span className="text-2xl font-bold text-white">Capital One</span>
                <span className="text-2xl font-bold text-white">Bank of America</span>
                <span className="text-2xl font-bold text-white">Goldman Sachs</span>
                <span className="text-2xl font-bold text-white">Wells Fargo</span>
                <span className="text-2xl font-bold text-white">Citigroup</span>
                <span className="text-2xl font-bold text-white">Morgan Stanley</span>
                <span className="text-2xl font-bold text-white">American Express</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultingServices />

      {/* Case Study Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* <span className="inline-block bg-blue-100 text-[#f0a709] px-4 py-2 rounded-full text-sm font-medium mb-4">
                CASE STUDY
              </span> */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-6">
                Customized Dashboards & API Integrations
              </h2>
              <p className="text-lg text-white mb-6">
                In Today&rsquo;s data-driven world, having access to real-time
                insights is crucial for making informed decisions. Our
                Customized Dashboards & API Integrations provide you with
                powerful data analytics tools that deliver comprehensive views
                of your business performance.
                <br></br> <br></br> Our services include:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiBarChart2 className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709] ">
                      Real-Time Analytics:
                    </h3>
                    <p className="text-white">
                      Gain actionable insights into your business operations,
                      sales performance, customer behavior, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiCpu className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709] ">
                      API Integrations:
                    </h3>
                    <p className="text-white">
                      Seamlessly integrate third-party services and tools with
                      your existing systems, creating a unified, connected
                      ecosystem that streamlines data flow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0a709] p-3 rounded-full flex-shrink-0">
                    <FiPieChart className="text-[#fff] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#f0a709] ">
                      Reporting & Visualization:
                    </h3>
                    <p className="text-white">
                      We develop visually appealing, easy-to-understand
                      dashboards that allow stakeholders to make decisions based
                      on accurate, real-time data.
                    </p>
                  </div>
                </div>
              </div>
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
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-br from-[#0F0828] to-[#100A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1A1335] text-[#f0a709] px-6 py-3 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-[#f0a709]">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our consulting services have transformed businesses
              and driven success.
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
                rating: 5,
              },
              {
                quote:
                  "Their insights into our operations helped us cut costs by 30% while improving efficiency. Game changing!",
                name: "Michael Johnson",
                role: "COO, RetailCorp",
                image: "https://randomuser.me/api/portraits/men/34.jpg",
                rating: 5,
              },
              {
                quote:
                  "The team understood our challenges immediately and delivered solutions that actually worked in practice.",
                name: "Sarah Williams",
                role: "Director, Global Finance",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 relative"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f0a709] opacity-5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#f0a709] opacity-5 rounded-tr-full"></div>

                <div className="mb-6">
                  <div className="flex text-[#f0a709]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center pt-4 border-t border-gray-800">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#f0a709]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-[#f0a709] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PricingSection />
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
            Let&#39;s discuss how we can help you achieve your business goals.
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
}
