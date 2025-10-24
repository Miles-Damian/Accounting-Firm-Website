// src/components/TeamSection/TeamSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Joebert Patrick Go, CPA",
    position: "Managing Director",
    desc: "With over 10 years of experience in tax and consultancy services, Joebert provides strategic leadership and vision for the company. He oversees the company's overall direction, ensuring that each engagement reflects Insight's mission of empowering businesses to grow confidently and sustainably.",
    bgImg: `/images/portraits/p-1.webp`,
  },
  {
    name: "Shaun-Hirshenshaun-Cusi, CPA",
    position: "Regulatory Compliance Director",
    desc: "Shaun brings extensive expertise in managing regulatory compliances across various industries. His proactive approach ensures that businesses remain compliant and operate efficiently, minimizing regulatory delays and enabling smooth business operations.",
    bgImg: `/images/portraits/p-2.webp`,
  },
];

const TeamSection = () => {
  const [flipped, setFlipped] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observe section visibility for scroll animation
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

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center w-full px-6 py-16 md:py-24 font-montserrat 
      bg-gradient-to-br from-[#f1f9f3] via-[#f9fbf8] to-[#e9f5ee] overflow-hidden"
    >
      {/* 🎨 Decorative Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(#003d20 0.7px, transparent 0.7px), radial-gradient(#003d20 0.7px, #f9fbf8 0.7px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      ></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-3xl md:text-5xl font-extrabold text-[#003d20] uppercase tracking-widest text-center mb-14"
      >
        Meet Our Best Team
      </motion.h2>

      {/* Team Grid */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 sm:gap-16 lg:gap-[120px] sm:grid-cols-2 lg:grid-cols-2">

        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            onClick={() => handleFlip(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className="relative w-full cursor-pointer group [perspective:1200px]"
          >
            {/* Card Wrapper */}
            <div
              className={`relative w-full h-[340px] sm:h-[400px] md:h-[480px] lg:h-[520px] transition-transform duration-700 ease-out [transform-style:preserve-3d]
                hover:shadow-2xl ${
                  flipped === index ? "[transform:rotateY(180deg)]" : ""
                }`}
              style={{
                willChange: "transform",
                transform: flipped === index ? "rotateY(180deg)" : "none",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 rounded-2xl bg-cover bg-center flex flex-col justify-end [backface-visibility:hidden]"
                style={{
                  backgroundImage: `url(${member.bgImg})`,
                }}
              >
                {/* Name & Position */}
                <div className="w-full py-3 text-center text-white bg-gradient-to-t from-[#003d20]/95 via-[#003d20]/70 to-transparent rounded-b-2xl">
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-medium opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    {member.position}
                  </p>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-white text-center bg-[#003d20] rounded-2xl shadow-xl overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                style={{
                  transform: "rotateY(180deg) translateZ(0)",
                }}
              >
                <p className="text-sm sm:text-base md:text-xl leading-relaxed opacity-95 max-w-[90%]">
                  {member.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
