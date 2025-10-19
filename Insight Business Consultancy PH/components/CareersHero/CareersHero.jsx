const CareersHero = () => {
	return (
		<section id="careers-hero"
				 className="flex flex-col p-4 gap-4 md:flex-row md:h-[calc(100vh-4rem)] max-w-[1400px] md:mx-auto md:items-center lg:gap-4 lg:py-10 xl:py-18 mt-25">
			<div className="flex flex-col flex-1 gap-4">
				<h1 className="text-4xl font-bold font-inter">
					Your Future Begins Here — Grow With Us at
					<span className="font-inter font-bold text-[#668557] text-5xl">
						&nbsp;Insight Business Consultancy Inc.
					</span>
				</h1>

				<h2 className="text-base font-light font-poppins lg:text-xl">
					At INSIGHT BUSINESS CONSULTANCY INC., we are committed to delivering quality services while creating
					opportunities for talented individuals to grow and succeed. We value people who are passionate,
					detail-oriented, and dedicated to excellence.
				</h2>

				<h2 className="text-base italic font-light font-poppins lg:text-xl">
					If you’re looking for a company where you can learn, contribute, and build a long-term career, then
					this is the right place for you.
				</h2>

				<a href="#"
				   className="font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md cursor-pointer border-b-6 border-[#4d6242] text-lg transition-all duration-300 ease-in-out  hover:bg-[#59734c] hover:scale-105 w-fit block">
					Explore Opportunities
				</a>
			</div>

			<div className="flex-1 w-full h-full">
				<img src="https://ibcph.com/images/stock/handshake.jpg" alt="Handshake"
					 className="object-cover w-full h-full rounded-xl"/>
			</div>
		</section>
	);
};

export default CareersHero