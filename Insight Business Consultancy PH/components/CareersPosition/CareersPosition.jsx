import {Link} from "react-router-dom";

const CareersPosition = () => {
	return (
		<section id='careers-position'
				 className="h-[calc(100vh-4rem)] max-w-[1400px] mx-auto py-5 lg:py-10 px-4 flex flex-col justify-between">
			<div
				className="bg-[url('/images/bg/office.jpg')] bg-bottom bg-cover bg-no-repeat h-[80%] rounded-xl flex flex-col justify-end p-4 md:p-6 lg:p-10">
				<h1 className="font-inter font-extrabold text-4xl lg:text-6xl text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.4)] mb-2">Accounting
					Associate</h1>

				<p className="text-white font-inter md:max-w-[70%] lg:text-xl">Join our Team as an Accounting Associate
					and be part of our success. We offer a dynamic work environment and opportunities for growth.</p>
			</div>

			<div className="flex flex-col items-center gap-4 mt-4">
				<h2 className="text-2xl font-extrabold text-center font-inter">We look forward to receiving your
					Application!</h2>

				<Link to="/careers/apply"
					  className="font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md cursor-pointer border-b-6 border-[#4d6242] text-lg transition-all duration-300 ease-in-out  hover:bg-[#59734c] hover:scale-105 w-fit block">
					Apply Now
				</Link>
			</div>
		</section>
	);
};

export default CareersPosition;