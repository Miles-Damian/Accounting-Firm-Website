// src/components/AboutCompany/AboutCompany.jsx
import React, { useEffect, useRef, useState } from "react";

const AboutCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container grid items-center grid-cols-1 gap-12 px-4 py-16 mx-auto lg:grid-cols-2"
    >
      {/* Text Section */}
      <div
        className={`flex flex-col gap-6 text-center lg:text-left transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase">
          About Company
        </h2>
        <h1 className="text-4xl font-black tracking-tighter md:text-5xl">
          INSIGHT BUSINESS CONSULTANCY INC.
        </h1>
        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
        a newly established firm committed to providing professional, end-to-end business solutions for entrepreneurs, startups, and growing companies in the Philippines.
We are a team of passionate accounting, finance, legal, and compliance experts dedicated to helping businesses start strong, operate legally, and scale successfully.
Whether you're launching your first venture or managing an expanding enterprise, INSIGHT is your trusted partner every step of the way.

        </p>
      </div>

      {/* Hexagon Image */}
      <div
        className={`relative flex items-center justify-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        {/* Outer Green Border */}
        <div
          className="relative w-[460px] h-[560px] md:w-[560px] md:h-[660px] flex items-center justify-center"
          style={{
            clipPath:
              "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            backgroundColor: "#059669", // green border
          }}
        >
          {/* Inner White Border */}
          <div
            className="w-[440px] h-[540px] md:w-[540px] md:h-[640px] flex items-center justify-center"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              backgroundColor: "white",
            }}
          >
            {/* Image */}
            <div
              className="w-[420px] h-[520px] md:w-[520px] md:h-[620px] bg-cover bg-center shadow-xl transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: "url('/images/bg/building.jpg')",
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
