// CareersPosition.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../JobCard/JobCard";

const CareersPosition = () => {
	const jobCardData = [
		{
			id: 'accounting-associate', // <-- ADD ID
			bgSrc: '/images/bg/office.jpg',
			title: 'Accounting Associate',
			description: `Join our Team as an Accounting Associate and be part of our success. We offer a dynamic work environment and opportunities for growth.`
		},
		{
			id: 'web-developer', // <-- ADD ID
			bgSrc: '/images/stock/web-dev.webp',
			title: 'Web Developer',
			description: `Join our team as a Web Developer and be part of our growing digital success. We offer an innovative work environment where you can enhance your skills, collaborate on exciting projects, and grow your career in web development.`
		}
	];

	// ... (rest of the component logic is unchanged) ...
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		const newIndex = currentIndex === jobCardData.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const handlePrev = () => {
		const newIndex = currentIndex === 0 ? jobCardData.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const currentJob = jobCardData[currentIndex];

	return (
		<section id='careers-position'
			className="lg:min-h-[calc(100vh-4rem)] max-w-[1400px] mx-auto py-8 lg:py-10 px-4 flex flex-col justify-between">

			<JobCard
				key={currentIndex}
				{...currentJob} // This now passes the 'id' prop too
				onNext={handleNext}
				onPrev={handlePrev}
				showControls={jobCardData.length > 1}
			/>

			<div className="flex flex-col items-center gap-4 mt-4">
				<h2 className="text-2xl font-extrabold text-center font-inter">We look forward to receiving your
					Application!</h2>

				<Link to="/careers/apply"
					state={{ job: currentJob }} // This passes the object with the 'id'
					className="font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md cursor-pointer border-b-6 border-[#4d6242] text-lg transition-all duration-300 ease-in-out  hover:bg-[#59734c] hover:scale-105 w-fit block">
					Apply Now
				</Link>
			</div>
		</section>
	);
};

export default CareersPosition;