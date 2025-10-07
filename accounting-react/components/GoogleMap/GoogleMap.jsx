// src/components/GoogleMap/GoogleMap.jsx
import React, { useEffect, useRef, useState } from "react";

const GoogleMap = () => {
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
      className="flex flex-col items-center justify-center py-12 overflow-hidden bg-white interactive_map_section"
    >
      <h1
        className={`font-montserrat text-[#003d20] text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        INTERACTIVE MAPS
      </h1>

      <div
        className={`w-full px-4 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90"
        }`}
      >
        <iframe
          id="interactive_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810.9725281764943!2d120.59420453420651!3d15.536005336815975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c9439709824d%3A0xc0863cdbb03190dd!2sJPG%20Accounting!5e0!3m2!1sen!2sph!4v1759827183224!5m2!1sen!2sph"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl shadow-md"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Interactive Map"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
