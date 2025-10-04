// src/components/CoreValues/CoreValues.jsx
import React, { useEffect, useRef, useState } from "react";

const coreValues = [
  {
    title: "Integrity",
    desc: "We uphold honesty and transparency in every service we provide.",
  },
  {
    title: "Excellence",
    desc: "We deliver accurate, timely, and high-quality outputs.",
  },
  {
    title: "Commitment",
    desc: "We treat your business goals as our own.",
  },
  {
    title: "Continuous Learning",
    desc: "We stay updated on new laws, trends, and technologies.",
  },
  {
    title: "Client Success",
    desc: "Your success is our greatest measure of achievement.",
  },
];

const CoreValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger reveal when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center px-6 py-24 bg-white lg:px-20"
    >
      <div
        className={`w-full max-w-5xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[#004524] text-[14px] uppercase tracking-widest font-semibold mb-3">
          Our Core Values
        </h2>
        <h1 className="mb-12 text-4xl font-bold text-black sm:text-5xl">
          What Drives Insight Forward
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {coreValues.map((value, index) => (
            <article
              key={value.title}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative rounded-xl bg-white border border-transparent
                          pl-6 md:pl-7 py-6 pr-5
                          shadow-[0_0_0_0_rgba(0,0,0,0)]
                          transition-all duration-500
                          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                          hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.15)]
                          hover:border-[#e9f8f2]`}
            >
              {/* Accent left border */}
              <span
                className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#00b894]
                           transition-colors duration-300 group-hover:bg-[#004524]"
                aria-hidden="true"
              />

              <h3 className="text-2xl font-bold text-[#004524] transition-colors duration-300 group-hover:text-[#003d20]">
                {value.title}
              </h3>

              {/* Micro underline on hover */}
              <span className="block mt-1 h-0.5 w-0 bg-[#00b894] transition-all duration-300 group-hover:w-16" />

              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                {value.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
