// pages/index.js
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/navbar";
import ConsultingServices from "@/components/services/services";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

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
    <>
      <section
        className={`relative w-full h-[150vh] bg-cover bg-center bg-fixed ${poppins.variable} font-sans`}
        style={{
          backgroundImage:
            "url('https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/hero-free-img.jpg')",
        }}
      >
        <Navbar />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-white flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 py-56">
          <div className="max-w-2xl">
            <p className="text-[15px] mb-4 font-normal">WELCOME!</p>
            <h1 className="text-[60px] font-bold leading-tight mb-6">
              Strong business
              <br />
              strategy to grow your
              <br />
              business.
            </h1>
            <a
              href="#more-info"
              className={`${openSans.className} hover:cursor-pointer text-[12px] inline-block mt-4 bg-[#27A1F6] text-white px-8 py-3 hover:bg-[#4370F3] transition-colors font-bold`}
            >
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center bg-[#F7F7F7] min-h-[130vh] gap-6">
        <div
          className="w-full lg:w-1/2 min-h-[130vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/about-01.jpg')",
          }}
        ></div>

        <div className="w-full lg:w-1/2 px-24">
          <h4 className="text-[#27A1F6] uppercase text-sm font-semibold tracking-widest mb-4">
            About
          </h4>
          <h2
            className={`text-[45px] font-bold leading-tight text-gray-900 mb-6 ${poppins.variable}`}
          >
            We help small business owners and professionals to get things done.
          </h2>
          <p
            className={`${openSans.className} text-gray-600 text-[15px] leading-relaxed mb-8`}
          >
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus.
          </p>
          <button
            className={`${openSans.className}  mt-8 hover:cursor-pointer text-[12px] inline-block  bg-[#27A1F6] text-white px-8 py-3 hover:bg-[#4370F3] transition-colors font-bold`}
          >
            Read More
          </button>
        </div>
      </section>
      <ConsultingServices />
      <section className="flex flex-col lg:flex-row items-center bg-[#F7F7F7] min-h-[100vh] gap-6">
        <div className="max-w-2xl px-20">
          <h4 className="text-[#27A1F6] uppercase text-sm font-semibold tracking-widest mb-4">
            Case Study
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Capital Co. jump-starts growth with return to core strategies
          </h2>
          <p
            className={`${poppins.variable} text-gray-600 text-[15px] leading-relaxed`}
          >
            Facing market challenges, Capital Co. achieved significant growth by
            refocusing on its core business strategies. By returning to its
            foundational goals, the company streamlined operations and boosted
            efficiency, setting the stage for long-term success.
          </p>
          <p
            className={`${poppins.variable} text-gray-600 text-[15px] leading-relaxed`}
          >
            Our strategic guidance helped Capital Co. optimize processes,
            enhance productivity, and strengthen its market position. The result
            was a revitalized brand and a more agile, competitive organization.
          </p>

          <button
            className={`${openSans.className}  mt-8 hover:cursor-pointer text-[12px] inline-block  bg-[#27A1F6] text-white px-8 py-3 hover:bg-[#4370F3] transition-colors font-bold`}
          >
            SEE ALL CLIENTS RESULTS
          </button>
        </div>
        <div
          className="w-full lg:w-1/2 min-h-[100vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://websitedemos.net/business-consultancy-firm-04/wp-content/uploads/sites/882/2021/06/bg-13-free-img-1.jpg")',
          }}
        ></div>
      </section>
      <div className="bg-neutral-950">
        <section className="max-w-5xl mx-auto w-full px-10 py-20">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
              Here's what our
              <span className="text-[#45B3BA]"> customers</span> have to say
            </h2>
            <p className="text-lg font-medium text-slate-400/70">
              Discover how our service can benefit you
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
            <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-white">
                  Efficient customer support
                </p>
                <p className="font-medium text-white">
                  The customer support team at our service is incredibly
                  responsive and helpful. They went above and beyond to assist
                  me with my issue.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/women/43.jpg"
                  alt="Emily Smith"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="pt-2 text-sm font-semibold text-white">
                  Emily Smith
                </p>
                <p className="text-sm font-medium text-slate-100/70">
                  Marketing Manager at ABC Company
                </p>
              </div>
            </div>

            <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-white">
                  Excellent product features
                </p>
                <p className="font-medium text-white">
                  The features offered by our service are outstanding. They have
                  greatly improved our workflow and efficiency.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="Michael Johnson"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="pt-2 text-sm font-semibold text-white">
                  Michael Johnson
                </p>
                <p className="text-sm font-medium text-slate-100/70">
                  CEO at XYZ Corporation
                </p>
              </div>
            </div>

            <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-white">
                  Seamless integration process
                </p>
                <p className="font-medium text-white">
                  Integrating our systems with our service was smooth and
                  hassle-free. The support team guided us through every step of
                  the process.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/women/71.jpg"
                  alt="Sarah Brown"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="pt-2 text-sm font-semibold text-white">
                  Sarah Brown
                </p>
                <p className="text-sm font-medium text-slate-100/70">
                  CTO at XYZ Corporation
                </p>
              </div>
            </div>

            <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-white">
                  Reliable service uptime
                </p>
                <p className="font-medium text-white">
                  Our service has consistently maintained high uptime, ensuring
                  that our operations run smoothly without any disruptions.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/71.jpg"
                  alt="James White"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="pt-2 text-sm font-semibold text-white">
                  James White
                </p>
                <p className="text-sm font-medium text-slate-100/70">
                  COO at XYZ Corporation
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <button onClick={openCalendly} className="btn-primary">
        Schedule a Meeting
      </button> */}
      <Footer />
    </>
  );
}
