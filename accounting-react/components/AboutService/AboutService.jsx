import { useEffect, useRef, useState } from 'react';

const AboutService = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			id="about-service"
			className="bg-[#f6f7f8] px-4 py-24 flex flex-col gap-8 items-center"
		>
			<div
				className={`transition-all duration-700 ease-out ${isVisible
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-8'
					}`}
			>
				<h2 className="mb-2 text-3xl font-extrabold text-center text-gray-800 font-inter">
					{props.subSectionHeading1}
				</h2>

				<p className="font-light text-center text-gray-800 font-inter lg:text-xl">
					{props.subSectionSubHeading1}
				</p>
			</div>

			<div
				className={`transition-all duration-700 ease-out delay-200 ${isVisible
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-8'
					}`}
			>
				<div className="flex items-center justify-center gap-2 mb-2 fa-xl">
					<i
						className="fa-solid fa-circle-check animate-jump-in animate-infinite animate-duration-1000"
						style={{ color: '#7cb490' }}
					></i>
					<h2 className="text-3xl font-extrabold text-center text-gray-800 font-inter">
						Why it Matters?
					</h2>
				</div>

				<p className="font-light text-center text-gray-800 font-inter lg:text-xl">
					{props.subSectionSubHeading2}
				</p>
			</div>

			<button
				className={`font-inter font-semibold border-2 border-[#7cb490] bg-transparent px-8 py-4 text-[#7cb490] rounded-md cursor-pointer border-b-6 border-[#4f735b] text-lg hover:border-[#4f735b] hover:scale-105 ${isVisible
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-8'
					}`}
				style={{
					transition: isVisible ? 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s' : 'opacity 0.7s ease-out, transform 0.7s ease-out',
					...(isVisible && { transition: 'border 0.3s ease-in-out, transform 0.3s ease-in-out, opacity 0.7s ease-out 0.4s' })
				}}
			>
				Learn More
			</button>
		</section>
	);
};

export default AboutService;