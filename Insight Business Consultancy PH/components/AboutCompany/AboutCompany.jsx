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
  className="container grid items-center grid-cols-1 gap-12 px-4 py-16 mx-auto lg:grid-cols-2 pt-[115px] lg:pt-[120px]"
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
        a trusted network of seasoned professionals composed of accountants, lawyers, and IT specialists dedicated to delivering comprehensive business solutions for entrepreneurs and growing companies in the Philippines. With years of combined expertise, our team ensures that every client receives reliable guidance—from business registration and compliance to strategic growth and digital transformation. Whether you’re starting a new venture or expanding your operations, INSIGHT is your dependable partner in building a sustainable and future-ready business.
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
          className="relative flex items-center justify-center 
                     w-[260px] h-[300px] 
                     sm:w-[320px] sm:h-[360px] 
                     md:w-[500px] md:h-[580px]
                     lg:w-[620px] lg:h-[720px]"
          style={{
            clipPath:
              "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            backgroundColor: "#059669",
          }}
        >
          {/* Inner White Border */}
          <div
            className="w-[94%] h-[94%] flex items-center justify-center"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              backgroundColor: "white",
            }}
          >
            {/* Image */}
            <div
              className="w-[90%] h-[90%] bg-cover bg-center shadow-xl transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
              style={{
                backgroundImage: "url('https://ibcph.com/images/bg/building.jpg')",
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
