// src/components/Industries/Industries.jsx
import React, { useEffect, useRef, useState } from "react";

const industryIcons = {
  "Startups & Entrepreneurs": "fa-solid fa-rocket",
  "Small & Medium Enterprises (SMEs)": "fa-solid fa-store",
  "Corporations": "fa-solid fa-building",
  "Professional Firms": "fa-solid fa-scale-balanced",
  "Non-Profits & Organizations": "fa-solid fa-hand-holding-heart",
};

// Distinct animations
const industryAnimations = {
  "Startups & Entrepreneurs": "group-hover:-translate-y-2", // rocket lifts up
  "Small & Medium Enterprises (SMEs)": "group-hover:scale-110", // pulse
  "Corporations": "group-hover:rotate-3", // slight shake
  "Professional Firms": "group-hover:-rotate-6", // tilt
  "Non-Profits & Organizations": "group-hover:scale-125", // heartbeat
};

const industries = Object.keys(industryIcons);

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
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
      className="py-16 overflow-hidden bg-white dark:bg-gray-900 font-display"
    >
      <div className="container px-6 mx-auto text-center lg:px-8">
        {/* Heading */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 -translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-400">
            Insight Business Consultancy Inc. supports a wide range of businesses.
          </p>
        </div>

        {/* Industries List */}
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-12 text-left sm:grid-cols-2">
          {industries.map((industry, index) => {
            const direction = index % 2 === 0 ? "-translate-x-10" : "translate-x-10";

            return (
              <div
                key={industry}
                className={`group flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm 
                transition-all duration-700 
                ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${direction}`}
                hover:-translate-y-2 hover:shadow-lg`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <i
                  className={`${industryIcons[industry]} text-green-600 text-xl transition-transform duration-300 ${industryAnimations[industry]}`}
                ></i>
                <span className="text-lg font-medium text-gray-800 transition-colors duration-300 dark:text-gray-200 group-hover:text-green-700">
                  {industry}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
