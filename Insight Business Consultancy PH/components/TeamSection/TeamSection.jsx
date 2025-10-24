// src/components/TeamSection/TeamSection.jsx
import React from "react";
import { motion } from "motion/react";

const teamMembers = [
	{
		name: "Joebert Patrick Go, CPA",
		position: "Managing Director",
		desc: "With over 10 years of experience in tax and consultancy services, Joebert provides strategic leadership and vision for the company. He oversees the company's overall direction, ensuring that each engagement reflects Insight's mission of empowering businesses to grow confidently and sustainably.",
		bgImg: `/images/portraits/p-1.webp`
	},
	{
		name: "Shaun-Hirshenshaun-Cusi, CPA",
		position: "Regulatory Compliance Director",
		desc: "Shaun brings extensive expertise in managing regulatory compliances across various industries. His proactive approach ensures that businesses remain compliant and operate efficiently, minimizing regulatory delays and enabling smooth business operations.",
		bgImg: `/images/portraits/p-2.webp`
	},
];

const TeamSection = () => {
	return (
		<section
			className="flex flex-col items-center justify-center w-full px-6 py-20 md:py-28 font-montserrat bg-[#f9fbf8]">
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
			<div className="grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 h-[calc(100vh-18rem)]">
				{teamMembers.map((member, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						// --- FIX 1: Move the transition prop INSIDE whileInView ---
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.6, delay: index * 0.2 }
						}}
						viewport={{ once: true }}
						// --- FIX 2: Add a separate, fast transition for hover ---
						whileHover={{
							scale: 1.03,
							y: -5,
							transition: { duration: 0.3, ease: "easeOut" }
						}}
						style={{ backgroundImage: `url(${member.bgImg})` }}
						// --- FIX 3: Removed 'transition-all' and 'duration-300' ---
						className={`team-card flex flex-col h-full items-center text-center p-8 rounded-2xl shadow-lg ${member.color} bg-cover bg-center`}
					>
						{/* Info */}
						<h3 className="text-xl font-extrabold md:text-2xl text-white">{member.name}</h3>
						<p className="mt-1 text-base font-medium opacity-90 text-white">{member.position}</p>
						<p className="text-sm md:text-base leading-relaxed opacity-90 text-white mt-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
							{member.desc}
						</p>

					</motion.div>
				))}
			</div>
		</section>
	);
};

export default TeamSection;