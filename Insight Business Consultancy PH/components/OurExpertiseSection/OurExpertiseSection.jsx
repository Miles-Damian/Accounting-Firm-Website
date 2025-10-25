import React from "react";
import {motion} from "motion/react";
import {
	FaClipboardCheck,
	FaCalculator,
	FaFileInvoiceDollar,
	FaUserClock,
	FaFileSignature,
	FaRegBuilding,
	FaDesktop
} from "react-icons/fa";

import { FaPersonWalkingLuggage, FaFlag } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import {Link} from "react-router-dom";

const services = [
	{
		icon: <FaClipboardCheck className="text-4xl text-black"/>,
		title: "Business Registration",
		desc: "Hassle-free processing with SEC, DTI, BIR, LGU, and government agencies.",
		src: 'business-registration'
	},
	{
		icon: <FaCalculator className="text-4xl text-black"/>,
		title: "Accounting & Bookkeeping",
		desc: "Transparent financial reporting and systems for smarter decisions.",
		src: 'bookkeeping-and-accounting'
	},
	{
		icon: <FaFileInvoiceDollar className="text-4xl text-black"/>,
		title: "Tax & Compliance",
		desc: "Timely BIR, SEC, and government filings without stress.",
		src: 'tax-and-regulatory-compliance'
	},
	{
		icon: <FaUserClock className="text-4xl text-black"/>,
		title: "Payroll Outsourcing",
		desc: "Efficient payroll, attendance tracking, and compliance.",
		src: 'payroll-outsourced'
	},
	{
		icon: <FaFileSignature className="text-4xl text-black"/>,
		title: "BIR One-Time Transactions",
		desc: "Specialized support in sale, donation, and estate processing.",
		src: 'bir-transactions'
	},
	{
		icon: <FaRegBuilding className="text-4xl text-black"/>,
		title: "Specialized Registrations",
		desc: "SEC Amendments, AMLC, DOLE, IPO, PEZA, BSP assistance.",
		src: 'specialized-registration'
	},
	{
		icon: <FaDesktop className="text-4xl text-black"/>,
		title: "Website Development Services",
		desc: "Website development and social media marketing to grow your brand.",
		src: 'website-development'
	},
	{
		icon: <FaPersonWalkingLuggage className="text-4xl text-black" />,
		title: "Immigration Services",
		desc: "Providing comprehensive assistance with alien registration, citizenship, and certification services for foreign and local clients.",
		src: "immigration-page"
	  },	  
	{
		icon: <FaFileSignature className="text-4xl text-black"/>,
		title: "Special Permit Services",
		desc: "Making it easy to apply for and obtain special permits.",
		src: 'special-permits'
	},
];

const OurExpertiseSection = () => {
	return (
		<section
			className="relative w-full px-6 py-20 overflow-hidden bg-gradient-to-b from-green-50 to-white lg:px-20">
			{/* Background pattern */}
			<div
				className="absolute inset-0 opacity-[0.05] bg-[url('/images/bg-pattern.svg')] bg-cover bg-center pointer-events-none"></div>

			<div className="relative z-10 max-w-6xl mx-auto text-center">
				<motion.h2
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					viewport={{once: true}}
					className="mb-4 text-4xl font-bold text-black lg:text-5xl"
				>
					OUR EXPERTISE
				</motion.h2>

				<motion.h3
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{delay: 0.1, duration: 0.6}}
					viewport={{once: true}}
					className="mb-3 text-xl font-medium text-gray-700"
				>
					Why Choose Us?
				</motion.h3>

				<motion.p
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{delay: 0.2, duration: 0.6}}
					viewport={{once: true}}
					className="max-w-3xl mx-auto mb-12 text-gray-700"
				>
					We combine knowledge, experience, and client-focused solutions to support your business every step
					of the way.
				</motion.p>

				{/* Services Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 40}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.4, delay: index * 0.1}}
							viewport={{once: true}}
							className="text-center transition-all duration-300 bg-white border border-gray-200 shadow-sm hover:shadow-lg rounded-2xl hover:-translate-y-1"
						>
							<Link to={`services/${service.src}`} target="_blank"
								  className="block p-6">
								<div className="flex justify-center mb-4">{service.icon}</div>
								<h4 className="text-lg font-bold text-[#004524] mb-2">
									{service.title}
								</h4>
								<p className="text-sm text-gray-600">{service.desc}</p>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurExpertiseSection;
