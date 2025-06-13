// pages/index.js
import Navbar from "@/components/navbar/navbar";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Include all weights you might need
  style: ["normal"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include weights you need
  style: ["normal", "italic"], // Optional
  variable: "--font-open-sans", // CSS variable name
});
export default function Home() {
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
              className={`${openSans.className} text-[12px] inline-block mt-4 bg-[#d11329] text-white px-8 py-3 hover:bg-black transition-colors font-bold`}
            >
              READ MORE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
