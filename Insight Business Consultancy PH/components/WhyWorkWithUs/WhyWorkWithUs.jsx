import React from "react";
import { motion } from "motion/react";
import { FaHandshake, FaUsers, FaLightbulb, FaHandHoldingUsd } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHandshake className="text-[#004524] text-4xl" />,
    title: "Reliable Expertise",
    desc: "Years of combined experience in business consulting and compliance.",
  },
  {
    icon: <FaUsers className="text-[#004524] text-4xl" />,
    title: "Comprehensive Solutions",
    desc: "From registration to digital growth — everything your business needs in one place.",
  },
  {
    icon: <FaLightbulb className="text-[#004524] text-4xl" />,
    title: "Client-Focused Approach",
    desc: "Tailored strategies to meet your unique business goals and challenges.",
  },
  {
    icon: <FaHandHoldingUsd className="text-[#004524] text-4xl" />,
    title: "Affordable & Transparent",
    desc: "Professional service at competitive rates with clear, upfront pricing.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f9faf9] via-[#edf5ee] to-[#e3efe6]">
      {/* 🌊 Curved Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 0 46.29C125.66 73.77 258.1 99.61 380 95.29 487.87 91.57 585.85 59.35 692 45.29 772.67 34.69 862.25 37.7 947 55.29 1028.29 72.03 1104.94 104.12 1200 120V0z"
            fill="#e8f5e9"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl px-6 py-24 mx-auto text-center lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-6 text-[#004524]"
        >
          WHY WORK WITH US?
        </motion.h2>

        {/* Divider */}
        <div className="mx-auto w-24 h-[3px] bg-[#004524] mb-10 rounded-full"></div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white shadow-md border border-[#d7e3da] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="bg-[#e8f5e9] rounded-full p-5 mb-4 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#004524] mb-2">
                {item.title}
              </h3>
              <p className="text-[#234d34] text-sm leading-relaxed max-w-[90%] mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌊 Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-b from-transparent to-[#111827] opacity-70"></div>
    </section>
  );
};

export default WhyWorkWithUs;
