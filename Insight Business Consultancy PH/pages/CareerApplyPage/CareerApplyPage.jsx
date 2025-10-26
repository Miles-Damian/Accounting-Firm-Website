// CareerApplyPage.jsx

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import JobForm from '../../components/JobForm/JobForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const CareerApplyPage = () => {
	const careersData = [
		{
			id: 'accounting-associate', // <-- ADD ID
			title: 'accounting associate',
			summary: `As an Accounting Associate, you will be part of our finance team, ensuring accurate financial records, compliance with regulations, and providing support in day-to-day accounting operations.`,
			responsibilities: [
				'Record and maintain financial transactions',
				'Manage accounts payable and receivable',
				'Prepare payroll and other disbursements',
				'Assist in financial reporting and reconciliations',
				'Support audits, tax compliance, and related tasks'
			],
			qualifications: [
				'Bachelor’s Degree in Accounting, Finance, or related field',
				'Knowledge of bookkeeping and accounting principles',
				'Proficient in Microsoft Office (Excel, Word); experience in accounting software is a plus',
				'Fresh graduates are encouraged to apply'
			],
		},
		{
			id: 'web-developer', // <-- ADD ID
			title: 'web developer',
			summary: `As a Web Developer, you will be part of our digital team, building and maintaining responsive, user-friendly websites and web applications that align with our business goals.`,
			responsibilities: [
				'Develop, test, and maintain websites and web applications',
				'Collaborate with designers and project managers to implement UI/UX designs',
				'Ensure website performance, responsiveness, and scalability',
				'Debug and optimize code for better efficiency and reliability',
				'Stay updated with emerging web technologies and best practices'
			],
			qualifications: [
				'Bachelor’s Degree in Computer Science, Information Technology, or related field',
				'Proficiency in HTML, CSS, JavaScript, and front-end frameworks (React, Vue, or similar)',
				'Experience with backend technologies such as Node.js or Firebase is a plus',
				'Strong problem-solving and debugging skills',
				'Fresh graduates with web development projects or portfolios are encouraged to apply'
			],
		},
	];

	const location = useLocation();

	const [selectedJob, setSelectedJob] = useState(careersData[0]);

	useEffect(() => {
		if(!location.state) {
			return;
		}

		const passedJob = location.state?.job?.id;

		setSelectedJob(prevSelected => {
			for(const career of careersData) {
				if(career.id === passedJob) {
					console.log(`Matched found! ${career.title}`);
					return career;
				}
			}	
		});
	}, [location.state?.job?.id]); 

	const handleNext = () => {
	};

	const handlePrev = () => {
	};

	// console.log(location.state?.job?.id);

	return (
		<>
			<Header />
			<section
				className="p-4 lg:p-10 min-h-[calc(100vh-4rem)] max-w-[1400px] mx-auto grid lg:grid-cols-2 lg:gap-12 mt-25">

				<div className="flex flex-col gap-8 mb-4">

					{/* --- BUTTON LAYOUT FIX --- */}
					{/* We wrap the buttons and title in a relative container */}
					<div className="flex justify-center items-center mb-4">

						{/* Title */}
						<h1 className="relative font-inter text-2xl text-center text-[#668557] font-bold lg:text-4xl capitalize">
							{/* Left Button */}
							{careersData.length > 1 && (
								<button
									onClick={handlePrev}
									className="cursor-pointer absolute left-0 -translate-x-12 lg:-translate-x-16 top-1/2 -translate-y-1/2 bg-white/50 text-black p-2 rounded-full shadow-md hover:bg-white transition-all focus:outline-none"
									aria-label="Previous job"
								>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
									</svg>
								</button>
							)}

							{/* Right Button */}
							{careersData.length > 1 && (
								<button
									onClick={handleNext}
									className="cursor-pointer absolute right-0 translate-x-12 lg:translate-x-16 top-1/2 -translate-y-1/2 bg-white/50 text-black p-2 rounded-full shadow-md hover:bg-white transition-all focus:outline-none"
									aria-label="Next job"
								>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</button>
							)}

							{selectedJob?.title}
						</h1>

					</div>
					{/* --- END BUTTON LAYOUT FIX --- */}


					<div>
						<h2 className="text-lg font-semibold font-inter">Job Summary</h2>
						<hr className="border-t-2 border-gray-300" />
						<p className="my-2">{selectedJob.summary}</p>
					</div>

					<div>
						<h2 className="text-lg font-semibold font-inter">Responsibilities</h2>
						<hr className="border-t-2 border-gray-300" />
						<ul className="my-2 list-disc list-inside">
							{selectedJob.responsibilities.map((item, index) => (
								<li key={index} className='marker:text-[#668557]'>{item}</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-lg font-semibold font-inter">Qualifications</h2>
						<hr className="border-t-2 border-gray-300" />
						<ul className="my-2 list-disc list-inside">
							{selectedJob.qualifications.map((item, index) => (
								<li key={index} className='marker:text-[#668557]'>{item}</li>
							))}
						</ul>
					</div>
				</div>

				<JobForm />
			</section>
			<Footer />
		</>
	);
};

export default CareerApplyPage;