import { Poppins, Open_Sans } from "next/font/google";
import {
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiTarget,
  FiCpu,
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
    title: "Business Strategy",
    description:
      "Develop winning strategies to outperform competitors and achieve sustainable growth in your market.",
    icon: <FiTrendingUp className="w-8 h-8 text-[#27A1F6]" />,
  },
  {
    title: "Financial Advisory",
    description:
      "Expert guidance to optimize your financial operations, reduce costs, and maximize profitability.",
    icon: <FiDollarSign className="w-8 h-8 text-[#27A1F6]" />,
  },
  {
    title: "Market Expansion",
    description:
      "Data-driven approaches to enter new markets and increase your customer base effectively.",
    icon: <FiBarChart2 className="w-8 h-8 text-[#27A1F6]" />,
  },
  {
    title: "Operational Excellence",
    description:
      "Streamline processes and boost productivity with our operational optimization frameworks.",
    icon: <FiTarget className="w-8 h-8 text-[#27A1F6]" />,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge technology solutions tailored to your needs.",
    icon: <FiCpu className="w-8 h-8 text-[#27A1F6]" />,
  },
  {
    title: "Talent Optimization",
    description:
      "Build high-performing teams with our HR strategies and organizational development expertise.",
    icon: <FiTeam className="w-8 h-8 text-[#27A1F6]" />,
  },
];

const ConsultingServices = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#27A1F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Consulting Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver measurable results through tailored solutions designed
            for your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#27A1F6] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex items-center text-[#27A1F6] font-medium group-hover:text-[#4370F3] transition-colors">
                <span>Discover how</span>
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
          <button className="bg-[#27A1F6] hover:bg-[#4370F3] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
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
