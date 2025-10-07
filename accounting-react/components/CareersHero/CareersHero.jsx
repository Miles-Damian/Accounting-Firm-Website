const CareersHero = () => {
	return (
		<section id="careers-hero" className="flex flex-col p-4 gap-4 md:flex-row md:h-[calc(100vh-4rem)] max-w-[1400px] md:mx-auto md:items-center lg:gap-4 lg:py-10 xl:py-18">
			<div className="flex-1 flex flex-col gap-4">
				<h1 className="font-inter font-bold text-4xl">
					Your Future Begins Here — Grow With Us at 
					<span className="font-inter font-bold text-[#668557] text-5xl">
						&nbsp;Insight Business Consultancy Inc.
					</span>
				</h1>

				<h2 className="font-poppins text-base lg:text-xl font-light">
					At INSIGHT BUSINESS CONSULTANCY INC., we are committed to delivering quality services while creating opportunities for talented individuals to grow and succeed. We value people who are passionate, detail-oriented, and dedicated to excellence.
				</h2>

				<h2 className="font-poppins text-base lg:text-xl font-light italic">
					If you’re looking for a company where you can learn, contribute, and build a long-term career, then this is the right place for you.
				</h2>

				<a href="#" className="font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md cursor-pointer border-b-6 border-[#4d6242] text-lg transition-all duration-300 ease-in-out  hover:bg-[#59734c] hover:scale-105 w-fit block">
					Explore Opportunities
				</a>
			</div>

			<div className="flex-1 h-full w-full">
				<img src="/images/stock/handshake.jpg" alt="Handshake" className="h-full w-full object-cover rounded-xl" />
			</div>
		</section>
	);
};

export default CareersHero