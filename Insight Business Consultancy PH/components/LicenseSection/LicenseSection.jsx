import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LicenseSection = () => {
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
    return () => observer.disconnect();
  }, []);

  const fadeUp = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  // ✅ Logos grouped in hierarchy
  const logos = [
    // 1️⃣ Licenses & Legal Registrations
    "https://ibcph.com/images/logo/SEC.png",
    "https://ibcph.com/images/logo/DTI.png",
    "https://ibcph.com/images/logo/BIR.png",
    "https://ibcph.com/images/logo/LGU.png",
    "https://ibcph.com/images/logo/SSS.png",
    "https://ibcph.com/images/logo/CDA.png",
    "https://ibcph.com/images/logo/BOI.png",

    // 2️⃣ Professional Accreditations
    "https://ibcph.com/images/logo/BOA.jpeg",
    "https://ibcph.com/images/logo/PRC.png",

    // 3️⃣ Software Certifications
    "https://ibcph.com/images/logo/quickbooks.png",
    "https://ibcph.com/images/logo/xero.png",
    "https://ibcph.com/images/logo/JuanTax.png",
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-white font-montserrat"
    >
      {/* Header */}
      <div className={`text-center mb-12 transition-all duration-700 ${fadeUp}`}>
        <h2 className="text-[#004524] text-sm uppercase tracking-widest font-semibold mb-2">
          Licenses & Legal Registration
        </h2>
        <h1 className="text-4xl font-extrabold text-black md:text-5xl">
          Partner with Certified Experts You Can Trust
        </h1>
      </div>

      {/* ✅ Animated Logo Grid */}
      <div
        className={`grid justify-center place-items-center gap-10 transition-all duration-700 ${fadeUp}
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6`}
      >
        {logos.map((src, idx) => {
          // Determine animation direction: top row left → bottom row right
          const isTopRow = idx < logos.length / 2;
          const slideDirection = isTopRow
            ? "-translate-x-10"
            : "translate-x-10";

          return (
            <div
              key={idx}
              className={`flex items-center justify-center transition-all duration-700 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : `opacity-0 ${slideDirection} translate-y-5`
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }} // slight stagger
            >
              <img
                src={src}
                alt={`Logo ${idx + 1}`}
                className="object-contain w-24 h-24 transition-transform duration-300 md:w-28 md:h-28 hover:scale-110 hover:shadow-lg rounded-xl"
              />
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className={`mt-16 transition-all duration-700 delay-300 ${fadeUp}`}>
        <Link
          to="/contact"
          className="bg-[#004524] hover:bg-[#006d3b] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer inline-block"
        >
          INQUIRE NOW
        </Link>
      </div>
    </section>
  );
};

export default LicenseSection;
