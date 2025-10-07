import { useState, useEffect, useRef } from 'react';
import ServiceCard from "../ServiceCard/ServiceCard";

const OurServices = (props) => {
	const sectionRef = useRef(null);
	// Create separate state for each element group to stagger them
	const [isTextVisible, setIsTextVisible] = useState(false);
	const [isGridVisible, setIsGridVisible] = useState(false);
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	useEffect(() => {
		const section = sectionRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					// Trigger animations via state updates with delays
					setIsTextVisible(true);
					setTimeout(() => setIsGridVisible(true), 200); // 200ms delay for the grid
					setTimeout(() => setIsButtonVisible(true), 400); // 400ms delay for the button

					observer.unobserve(section); // Animate only once
				}
			},
			{
				threshold: 0.2, // Trigger when 20% of section is visible
			}
		);

		if (section) {
			observer.observe(section);
		}

		return () => {
			if (section) {
				observer.unobserve(section);
			}
		};
	}, []);

	const cardComponents = props.cardData.map((data, index) => (
		<ServiceCard data={data} key={`card${index}`} />
	));

	// Common reveal classes for the text and grid
	const revealClasses = 'transition-all duration-700 ease-in-out';

	return (
		<section
			ref={sectionRef}
			className="min-h-[calc(100vh-4rem)] p-4 flex flex-col items-center max-w-[1400px] mx-auto overflow-hidden"
			id="our-services"
		>
			<div
				className={`p-12 ${revealClasses} ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
			>
				<h2 className="font-inter font-extrabold text-3xl text-gray-800 text-center mb-2">
					Turn your business idea into reality—fast, legal, and hassle-free.
				</h2>
				<p className="font-inter font-light text-gray-800 text-center lg:text-xl">
					We provide a full suite of services to get your business up and running legally.
				</p>
			</div>

			<div
				className={`grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full ${revealClasses} ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
			>
				{cardComponents}
			</div>

			<button
				className={`
                    font-inter font-semibold bg-[#7cb490] px-8 py-4 text-white rounded-md cursor-pointer
                    border-b-6 border-[#4f735b] text-lg my-12
                    hover:bg-[#70a281] hover:scale-105
                    transition-all duration-300 ease-in-out
                    ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
			>
				Book Now
			</button>
		</section>
	);
};

export default OurServices;