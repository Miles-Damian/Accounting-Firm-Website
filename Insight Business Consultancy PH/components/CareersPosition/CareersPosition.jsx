// CareersPosition.jsx

import { useState } from "react"; // 1. Import useState
import { Link } from "react-router-dom";
import JobCard from "../JobCard/JobCard";

const CareersPosition = () => {
	const jobCardData = [
		{
			bgSrc: '/images/bg/office.jpg',
			title: 'Accounting Associate',
			description: `Join our Team as an Accounting Associate and be part of our success. We offer a dynamic work environment and opportunities for growth.`
		},
		{
			bgSrc: '/images/stock/web-dev.webp',
			title: 'Web Development',
			description: `Join our team as a Web Developer and be part of our growing digital success. We offer an innovative work environment where you can enhance your skills, collaborate on exciting projects, and grow your career in web development.`
		}
	];

	// 2. Set up state for the current index
	const [currentIndex, setCurrentIndex] = useState(0);

	// 3. Define the navigation handlers
	const handleNext = () => {
		const newIndex = currentIndex === jobCardData.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const handlePrev = () => {
		const newIndex = currentIndex === 0 ? jobCardData.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	// 4. Get the single, currently active job
	const currentJob = jobCardData[currentIndex];

	return (
		<section id='careers-position'
			className="lg:min-h-[calc(100vh-4rem)] max-w-[1400px] mx-auto py-8 lg:py-10 px-4 flex flex-col justify-between">

			{/* 5. Render only ONE JobCard and pass new props */}
			<JobCard
				key={currentIndex} // Use key to help React differentiate
				{...currentJob} // Spreads bgSrc, title, and description
				onNext={handleNext} // Pass the handler function
				onPrev={handlePrev} // Pass the handler function
				showControls={jobCardData.length > 1} // Tell card to show buttons
			/>

			<div className="flex flex-col items-center gap-4 mt-4">
				<h2 className="text-2xl font-extrabold text-center font-inter">We look forward to receiving your
					Application!</h2>

				{/* 6. Update Link to pass 'state' prop */}
				<Link to="/careers/apply"
					state={{ job: currentJob }} // This passes the data to the /apply route
					className="font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md cursor-pointer border-b-6 border-[#4d6242] text-lg transition-all duration-300 ease-in-out  hover:bg-[#59734c] hover:scale-105 w-fit block">
					Apply Now
				</Link>
			</div>
		</section>
	);
};

export default CareersPosition;