"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
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
      rating: 4,
    },
    {
      quote:
        "Working with this team was a game-changer for our digital transformation journey. Highly recommended!",
      name: "David Chen",
      role: "CTO, InnovateTech",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
    },
    {
      quote:
        "The marketing strategy they developed increased our conversion rate by 150% in just three months.",
      name: "Jessica Martinez",
      role: "Marketing Director, Brandify",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-br from-blue-900 via-black to-purple-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-blue-400">Clients</span> Say
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Discover how our consulting services have transformed businesses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div
            className={`bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            <div className="mb-8 text-center">
              <svg
                className="w-12 h-12 text-blue-400 mx-auto mb-4 opacity-70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-xl text-white leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-blue-500/30">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-300">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-400 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Small thumbnails */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative w-16 h-16 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-blue-400 scale-110"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
