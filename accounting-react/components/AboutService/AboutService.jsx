const AboutService = () => {
	return (
		<section id="about-service" className="bg-[#f6f7f8] px-4 py-24 flex flex-col gap-8 items-center">
			<div>
				<h2 className="font-inter font-extrabold text-3xl text-gray-800 text-center mb-2">Turn your business idea into reality—fast, legal, and hassle-free.</h2>

				<p className="font-inter font-light text-gray-800 text-center">Starting a business shouldn’t be stressful. With our end-to-end registration services, we’ll take care of the legwork so you can focus on launching and growing.</p>
			</div>

			<div>
				<div className="flex items-center justify-center fa-xl gap-2 mb-2">
					<i className="fa-solid fa-circle-check animate-jump-in animate-infinite animate-duration-1000" style={{ color: '#7cb490'}}></i>
					<h2 className="font-inter font-extrabold text-3xl text-gray-800 text-center">Why Choose Us?</h2>
				</div>

				<p className="font-inter font-light text-gray-800 text-center">We save you weeks of back-and-forth with government offices, prevent costly mistakes, and give you peace of mind that your business is legally secured.</p>
			</div>

			<button className="font-inter font-semibold border-2 border-[#7cb490] bg-transparent px-8 py-4 text-[#7cb490] rounded-md cursor-pointer border-b-6 border-[#4f735b] text-lg transition-all duration-300 ease-in-out  hover:border-[#4f735b] hover:scale-105">
				Learn More
			</button>
		</section>
	);
};

export default AboutService;