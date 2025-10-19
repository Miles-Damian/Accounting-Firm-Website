import {useState, useEffect} from 'react';

const ServicesHero = (props) => {
	console.log(props.heroImage);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger animation after component mounts
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section
			id='services-hero'
			style={{backgroundImage: `url(${props.heroImage})`}}
			className={`p-2 h-[calc(115vh-7.5rem)] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-12 pt-20`}
		>
			<h1
				className={`font-inter font-extrabold text-4xl lg:text-6xl text-white text-center [text-shadow:_2px_2px_4px_rgba(0,0,0,0.4)] transition-all duration-1000 ease-out ${isVisible
					? 'opacity-100 translate-y-0'
					: 'opacity-0 -translate-y-8'
				}`}
				style={{transitionDelay: '200ms'}}
			>
				{props.heroHeading}
			</h1>
			{/* <button
				className={`font-inter font-semibold bg-[#7cb490] px-8 py-4 text-white rounded-md cursor-pointer border-b-6 border-[#4f735b] text-lg hover:bg-[#70a281] hover:scale-105 ${isVisible
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-8'
					}`}
				style={{
					transition: 'opacity 1s ease-out 500ms, transform 1s ease-out 500ms, background-color 0.3s ease-in-out, scale 0.3s ease-in-out',
				}}
			>
				Read More
			</button> */}
			<i
				className={`fa-solid fa-angles-down fa-4x animate-bounce animate-infinite transition-all duration-1000 ease-out ${isVisible
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-8'
				}`}
				style={{
					color: 'white',
					textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
					transitionDelay: '800ms'
				}}
			></i>
		</section>
	);
};

export default ServicesHero;