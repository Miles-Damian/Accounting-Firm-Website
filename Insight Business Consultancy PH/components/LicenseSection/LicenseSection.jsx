import React, {useEffect, useRef, useState} from "react";

const LicenseSection = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

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

	const fadeUp = isVisible
		? "opacity-100 translate-y-0"
		: "opacity-0 translate-y-10";

	// All logos (total 8)
	const logos = [
		"SEC",
		"BIR",
		"DTI",
		"CDA",
		"LGU",
		"PRC",
		"quickbooks",
		"xero",
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

			{/* Logos Grid (Even Two Rows) */}
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 transition-all duration-700 ${fadeUp}`}
			>
				{logos.map((name) => (
					<div
						key={name}
						className="flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-xl"
					>
						<img
							src={`https://ibcph.com/images/logo/${name}.png`}
							alt={name}
							className="object-contain w-24 h-24 md:w-28 md:h-28"
						/>
					</div>
				))}
			</div>

			{/* CTA Button */}
			<div className={`mt-16 transition-all duration-700 delay-300 ${fadeUp}`}>
				<button
					className="bg-[#004524] hover:bg-[#006d3b] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105">
					INQUIRE NOW
				</button>
			</div>
		</section>
	);
};

export default LicenseSection;
