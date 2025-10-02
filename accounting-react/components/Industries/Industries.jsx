// src/components/Industries/Industries.jsx
import React, { useEffect, useRef, useState } from "react";

// Simple icon
const IndustryIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className={`h-6 w-6 text-green-600 flex-shrink-0 ${className}`}
  >
    <path d="M6 2a1 1 0 00-1 1v2H3a1 1 0 000 2h2v6H3a1 1 0 000 2h2v2a1 1 0 001 1h8a1 1 0 001-1v-2h2a1 1 0 000-2h-2V7h2a1 1 0 000-2h-2V3a1 1 0 00-1-1H6zM7 5V4h6v1H7zm0 10v-1h6v1H7zm0-3V9h6v3H7z" />
  </svg>
);

const industries = [
  "Startups & Entrepreneurs",
  "Small & Medium Enterprises (SMEs)",
  "Corporations",
  "Professional Firms",
  "Non-Profits & Organizations",
];

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
      className="bg-white dark:bg-gray-900 py-16 font-display overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 text-center">
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
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Insight Business Consultancy Inc. supports a wide range of businesses.
          </p>
        </div>

        {/* Industries List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {industries.map((industry, index) => {
            // Alternate animation direction
            const direction =
              index % 2 === 0 ? "-translate-x-10" : "translate-x-10";

            return (
              <div
                key={industry}
                className={`flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${direction}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // stagger effect
              >
                <IndustryIcon />
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
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
