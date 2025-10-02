import { color } from "motion";

const ServicesHero = () => {
	return (
		<section id='services-hero' className="p-2 h-[calc(100vh-4rem)] bg-[url(/images/bg/building.jpg)] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-12">
			<h1 className="font-inter font-extrabold text-6xl text-white text-center [text-shadow:_2px_2px_4px_rgba(0,0,0,0.4)]">Business Registration Services</h1>

			<button className="font-inter font-semibold bg-[#7cb490] px-8 py-4 text-white rounded-md cursor-pointer border-b-6 border-[#4f735b] text-lg transition-all duration-300 ease-in-out  hover:bg-[#70a281] hover:scale-105">
				Read More
			</button>

			<i className="fa-solid fa-angles-down fa-4x animate-bounce animate-infinite" style={{ color: 'white' }}></i>
		</section>
	);
};

export default ServicesHero;