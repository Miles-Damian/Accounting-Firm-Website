// src/components/TeamSection/TeamSection.jsx
import React from "react";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Connor Hamilton",
    position: "President",
    desc: "Connor oversees the strategic direction of the company and ensures that every project aligns with Insight’s mission of empowering businesses to grow confidently.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkvq3UKK9Y1XHQK43Ah2OHBNLLh6gGTEmXicMFy1zaHyDfUNSqX_DuNS8a5ohHhv_t1QDPz-VIiMoZ5UUlifm6EFAvsLtDqDE0snFB8d8SOEJqWjxeyOSCm2PNa8JomVD_AInUa3Y6vcyxGQlfjZvH1PFe6jXghlTADPb1LIlEaRPqoQxyRB5Mq7NySuMF7GfrK3RhRezGUQ39nKtWElQ_Re4D4KWV47K4CFBLiPnPOYsE5wHhIgn_pJjKvRyaryF4ANhXIexpPEo",
    color: "bg-[#5b8a54] text-white",
  },
  {
    name: "Olivia Wilson",
    position: "Treasurer",
    desc: "Olivia manages financial operations, budgeting, and internal auditing. Her strong attention to detail ensures financial accuracy and sustainable growth.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF5-ZcECh5_sSwkIjUBH1H0EeuUMxqHpcpF1q47UWmUbttwB7mpgBXUlIdB4D8DIjYVA-Urojo3M517yGIsC_bPWQqDuHDMLdwQ0GwHNOunjaCXscspgqskXb1WFj-Qls48TaNhcpJ5bDwvirv2L8Hp-IpMy-6WK_A6NSSqp12qrQEoF0_24x38gN2Dt_lN98qKfiOsZYTIRkPStqC8NXsaibnmFlTLIgnQKsic_To_r2ESXoaz5w-GznWR-jF9iBjt92jZF5hTBQ",
    color: "bg-white text-[#004524]",
  },
  {
    name: "Francois Mercer",
    position: "Accounting Associate",
    desc: "Francois supports the financial reporting and tax compliance of clients, ensuring that every account is accurate, compliant, and audit-ready.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaoSJP0og_5ASYIQjBxXVfOiaVITzqtqS8gsbO-wV45h5fUjshxOK2RmT_oaIWRZz6FK6a-5qf0VBhfuC2A2MYthBkrYbw2obKR1SnALQPXQOaOfhtCxdo_AT3EDxTvOxf_yv6nmUgfGC4bVY5Zaa2YWG42u6kGClTifuhWzbHvY38334UuOLvzVMlD8NoDpSTc2etgoHuzwDPQOxPY9YWNvvj89iglBIZJu-9mKDZa-QYVTraYxrackzJEsCAe7owJEC9Vmwv6iw",
    color: "bg-[#5b8a54] text-white",
  },
];

const TeamSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-20 md:py-28 font-montserrat bg-[#f9fbf8]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-[#003d20] uppercase tracking-widest text-center mb-16"
      >
        Meet Our Best Team
      </motion.h2>

      {/* Team Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`team-card flex flex-col items-center text-center p-8 rounded-2xl shadow-lg transition-all duration-300 ${member.color}`}
          >
            {/* Hexagon Image */}
            <div className="relative w-40 mb-6 h-44">
              <div
                className="absolute inset-0 bg-[#3a3d57]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
              <div
                className="absolute inset-[4px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  backgroundImage: `url(${member.img})`,
                }}
              ></div>
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold md:text-2xl">{member.name}</h3>
            <p className="mt-1 text-base font-medium opacity-90">{member.position}</p>
            <p className="mt-3 text-sm md:text-base leading-relaxed opacity-90 max-w-[320px]">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
