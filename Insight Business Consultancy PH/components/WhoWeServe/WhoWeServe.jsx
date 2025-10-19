// src/components/WhoWeServe/WhoWeServe.jsx
import React, {useEffect, useRef, useState} from "react";

const clients = [
	{
		name: "Startup founders",
		icon: "fa-rocket",
	},
	{
		name: "Freelancers & professionals",
		icon: "fa-user-tie",
	},
	{
		name: "Small & medium enterprises (SMEs)",
		icon: "fa-briefcase",
	},
	{
		name: "Online sellers and digital businesses",
		icon: "fa-laptop-code",
	},
	{
		name: "NGOs and non-profits",
		icon: "fa-hand-holding-heart",
	},
	{
		name: "Local and foreign-owned corporations",
		icon: "fa-globe",
	},
];

const WhoWeServe = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	// Scroll animation trigger
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) setIsVisible(true);
			},
			{threshold: 0.2}
		);

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-white lg:px-20"
		>
			<div
				className={`max-w-5xl w-full transition-all duration-700 ease-out ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}
			>
				{/* Section Label */}
				<h2 className="text-[#00b894] text-[14px] uppercase tracking-widest font-semibold mb-3 text-center md:text-left">
					Who We Serve
				</h2>

				{/* Title */}
				<h1 className="mb-12 text-4xl font-bold text-center text-black sm:text-5xl md:text-left">
					Empowering a Diverse Range of Businesses
				</h1>

				{/* Client List */}
				<ul className="space-y-8 text-lg leading-relaxed text-gray-700">
					{clients.map((client, index) => (
						<li
							key={index}
							style={{transitionDelay: `${index * 120}ms`}}
							className={`flex items-center gap-5 transition-all duration-700 ease-out transform ${
								isVisible
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-10"
							} hover:translate-x-3`}
						>
							{/* Icon */}
							<div
								className="flex items-center justify-center w-10 h-10 bg-[#00b894]/10 border-2 border-[#00b894] text-[#00b894] rounded-full shadow-sm transition-all duration-300 hover:bg-[#00b894] hover:text-white hover:scale-110">
								<i className={`fa-solid ${client.icon} text-lg`}></i>
							</div>

							{/* Text */}
							<span className="font-medium text-[#003d20]">
                {client.name}
              </span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default WhoWeServe;
