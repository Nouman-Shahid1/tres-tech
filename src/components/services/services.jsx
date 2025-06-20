import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";

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
    title: "Business Consulting",
    description:
      "We assist businesses in enhancing performance, identifying growth opportunities, and implementing strategic plans to drive success.",
    image:
      "https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/icon-04-free-img.png",
  },
  {
    title: "Financial Consulting",
    description:
      "Our experts help you manage finances, reduce costs, and increase profitability through tailored financial strategies.",
    image:
      "https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/icon-05-free-img.png",
  },
  {
    title: "Sales & Marketing",
    description:
      "We offer innovative marketing strategies and sales solutions to improve customer acquisition and brand visibility.",
    image:
      "https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/icon-01-free-img.png",
  },
  {
    title: "Productivity Improvement",
    description:
      "Maximize team efficiency and operational output with our productivity audits and optimization practices.",
    image:
      "https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/icon-06-free-img.png",
  },
  {
    title: "Technology Consulting",
    description:
      "Leverage modern tech solutions with our guidance in IT infrastructure, digital transformation, and automation.",
    image:
      "https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/icon-02-free-img.png",
  },
  {
    title: "HR Consulting",
    description:
      "Enhance workforce management through recruitment strategies, compliance solutions, and HR policy development.",
    image:
      "https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/icon-03-free-img.png",
  },
];

const ConsultingServices = () => {
  return (
    <section className="bg-[#F7F7F7] py-28 pt-48 px-4 lg:px-36">
      <p
        className={`text-[#27A1F6] text-[15px] uppercase font-semibold tracking-widest mb-3 ${poppins.variable} `}
      >
        What We Do
      </p>
      <h2
        className={`text-[45px] font-bold leading-tight text-gray-900 mb-24 ${poppins.variable}`}
      >
        Consulting Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-left h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-28 h-28 object-contain"
                />
              </div>
              <h2
                className={`text-[20px] ${poppins.variable} font-normal text-black text-left mb-2`}
              >
                {service.title}
              </h2>
              <p
                className={`text-[15px] text-gray-600 mb-4 ${openSans.className}`}
              >
                {service.description}
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className={`text-[15px] font-normal text-[#27A1F6]/90 ${openSans.className} text-left hover:text-[#4370F3]`}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultingServices;
