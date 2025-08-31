import { Poppins, Open_Sans } from "next/font/google";
import {
  FiCode,
  FiHeadphones,
  FiPhone,
  FiPieChart,
  FiShare2,
  FiCpu,
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiTarget,
  FiUsers as FiTeam,
} from "react-icons/fi";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to fit your exact business needs, enhancing productivity and driving innovation.",
    icon: (
      <FiCode className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]  " />
    ),
  },
  {
    title: "IT & Tech Support Services",
    description:
      "Offering a full spectrum of IT services, from system maintenance to troubleshooting, ensuring your operations run smoothly.",
    icon: (
      <FiHeadphones className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]  " />
    ),
  },
  {
    title: "Call Center Solutions",
    description:
      "We provide end-to-end call center services that streamline customer interactions, enhance satisfaction, and optimize communication strategies.",
    icon: (
      <FiPhone className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]  " />
    ),
  },
  {
    title: "Customized Dashboards & API Integrations",
    description:
      "Unlock the power of real-time data and analytics with our expertly designed dashboards and seamless API integrations, enabling smarter business decisions.",
    icon: (
      <FiPieChart className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]  " />
    ),
  },
  {
    title: "Digital & Social Media Marketing",
    description:
      "Boost your brand’s presence across digital platforms with our customized marketing strategies designed to engage customers and increase conversions.",
    icon: (
      <FiShare2 className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]  " />
    ),
  },
  {
    title: "AI-Based Development",
    description:
      "Leverage the power of AI to automate processes, improve efficiency, and unlock data-driven insights that propel your business forward.",
    icon: (
      <FiCpu className="w-8 h-8 text-[#f0a709] group-hover:text-[#fff]  " />
    ),
  },
];

const ConsultingServices = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <span className="inline-block bg-blue-100 text-[#f0a709]px-4 py-2 rounded-full text-sm font-medium mb-4">
            OUR EXPERTISE
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0a709] mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-[#dda224]  max-w-3xl mx-auto">
            We deliver measurable results through tailored solutions designed
            for your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#100A1D] p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-[#f0a709] transition-all duration-300 hover:-translate-y-2 border border-[#997e43] hover:border-[#f0a709]"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#645024] rounded-full group-hover:bg-[#b87f04] transition-colors ">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#000] transition-colors">
                {service.title}
              </h3>
              <p className="text-white mb-6 group-hover:text-[#000]">
                {service.description}
              </p>
              <div className="flex items-center text-[#f8ac06] font-medium group-hover:text-[#fff] transition-colors">
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => (window.location.href = "/consulting-services")}
            className="bg-white text-[#f0a709] cursor-pointer hover:bg-[#f0a709] hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <span>Explore All Services</span>
            <svg
              className="w-4 h-4 ml-2"
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;
