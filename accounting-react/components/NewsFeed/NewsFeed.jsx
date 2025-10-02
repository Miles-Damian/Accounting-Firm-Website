// src/components/NewsSection/NewsSection.jsx
import React, { useEffect, useRef, useState } from "react";

const NewsCard = ({ img, alt, category, title, desc, delay, isVisible }) => (
  <div
    className={`flex flex-col transform transition-all duration-700 
    ${isVisible ? "opacity-100 rotate-0 translate-y-0" : "opacity-0 rotate-6 translate-y-10"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <img
      src={img}
      alt={alt}
      className="mb-4 w-full max-h-80 object-contain rounded-xl bg-white shadow-md"
    />
    <p className="mb-2 font-semibold text-cyan-600 text-sm md:text-base">
      {category}
    </p>
    <h3 className="mb-2 font-bold text-lg md:text-xl">{title}</h3>
    <p className="text-gray-700 text-sm md:text-base">{desc}</p>
  </div>
);

const LatestNews = () => {
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
      className="py-16 bg-gray-50 overflow-hidden"
    >
      <h1
        className={`text-3xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        LATEST NEWS AND EVENTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        <NewsCard
          img="/images/random-images/tax-dealine.png"
          alt="Tax Deadline"
          category="INSPIRATION"
          title="Warm Breeze and the Scent of Lavender - Why We Love Provence"
          desc="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except sint cupidit..."
          delay={100}
          isVisible={isVisible}
        />

        <NewsCard
          img="/images/random-images/bir does not accredit.png"
          alt="BIR News"
          category="COMMUNITY STORIES"
          title="The Art of Letting Go - How to Relax on Vacation"
          desc="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except sint cupidit..."
          delay={250}
          isVisible={isVisible}
        />

        <NewsCard
          img="/images/random-images/girl.png"
          alt="Travel With Kids"
          category="COMMUNITY STORIES"
          title="Things I Wish I Had Known Before I Started Traveling With Kids"
          desc="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except sint cupidit..."
          delay={400}
          isVisible={isVisible}
        />
      </div>
    </section>
  );
};

export default LatestNews;
