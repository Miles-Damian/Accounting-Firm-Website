// src/components/HomeHero/HomeHero.jsx
import React, { useState, useEffect, useRef } from "react";

const slides = [
  "/public/images/random-images/mission.jpg",
  "/public/images/random-images/vision.jpg",
  "/public/images/random-images/mission.jpg",
  "/public/images/random-images/vision.jpg",
  "/public/images/random-images/mission.jpg",
  "/public/images/random-images/vision.jpg",
  "/public/images/random-images/mission.jpg",
  "/public/images/random-images/vision.jpg",
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <main className="flex flex-col w-full" ref={heroRef}>
      <section
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center 
        bg-[url('/images/bg/building-filter.png')] bg-cover bg-no-repeat bg-center 
        px-6 sm:px-12 lg:px-20 xl:px-[90px] 
        pt-8 sm:pt-10 md:pt-12 lg:pt-[60px] xl:pt-[80px] pb-25"
      >
        {/* LEFT COLUMN */}
        <div
          className={`flex flex-col justify-center lg:w-1/2 max-w-xl text-center lg:text-left 
          transition-all duration-700 ${
            isVisible ? "animate-slideUp" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-[#004524] text-2xl sm:text-3xl md:text-4xl xl:text-[32px] font-bold font-montserrat leading-snug mt-25">
            Welcome to Insight Business Consultancy Inc.
          </h1>
          <p className="mt-4 text-base text-black sm:text-lg md:text-xl">
            Your One-Stop Partner for Business Growth
          </p>
          <p className="mt-4 text-base font-bold text-black sm:text-lg md:text-xl">
            Ready to take your business to the next level?
          </p>
          <p className="mt-4 text-base text-black sm:text-lg md:text-xl">
            Let Insight Business Consultancy Inc. handle the paperwork,
            compliance, and digital support so you can focus on growth.
          </p>
          <button className="bg-[#99e17a] font-bold rounded-[25px] border-2 border-[#003d20] text-[#003d20] text-base md:text-lg px-8 py-3 mt-8 shadow-[4px_4px_0px_#004d2c] hover:shadow-[6px_6px_0px_#003a22] transition self-center lg:self-start">
            Book an Appointment
          </button>
        </div>

        {/* RIGHT COLUMN - CAROUSEL */}
        <div
          className={`flex flex-col items-center lg:w-1/2 mt-0 lg:mt-0 lg:ml-12 sm:mt-30 transition-all duration-700 delay-300 ${
            isVisible ? "animate-slideUpDelay" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-full max-w-[500px] h-[350px] sm:h-[450px] md:h-[550px] flex justify-center items-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-30 p-2 text-lg text-white -translate-y-1/2 rounded-full top-1/2 lg:left-20 bg-black/60 sm:text-xl md:text-2xl sm:p-3 md:p-4"
            >
              &#10094;
            </button>

            {/* Slides */}
            {slides.map((src, index) => {
              const offset = (index - current + slides.length) % slides.length;

              let positionClass = "hidden";
              if (offset === 0) {
                positionClass =
                  "z-20 scale-110 opacity-100 translate-x-0"; // center
              } else if (offset === 1) {
                positionClass =
                  "z-10 scale-90 opacity-70 translate-x-[160px] sm:translate-x-[200px]";
              } else if (offset === slides.length - 1) {
                positionClass =
                  "z-10 scale-90 opacity-70 -translate-x-[160px] sm:-translate-x-[200px]";
              }

              return (
                <img
                  key={index}
                  src={src}
                  alt={`slide-${index}`}
                  className={`absolute rounded-[20px] object-cover transition-all duration-500 ease-in-out
                    ${positionClass}
                    w-[140px] sm:w-[180px] md:w-[200px] 
                    h-[250px] sm:h-[350px] md:h-[450px]`}
                />
              );
            })}

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-30 p-2 text-lg text-white -translate-y-1/2 rounded-full top-1/2 lg:right-20 bg-black/60 sm:text-xl md:text-2xl sm:p-3 md:p-4"
            >
              &#10095;
            </button>
          </div>

          {/* View More Button */}
          <button className="text-lg sm:text-xl font-bold mt-8 bg-[#00b894] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-[24px] hover:bg-[#019874] transition">
            View More
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomeHero;
