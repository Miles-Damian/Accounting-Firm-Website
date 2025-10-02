import ServiceCard from "../ServiceCard/ServiceCard";

const cardData = [
	{
		src: '/images/stock/dti.jpg',
		title: 'Sec Registration',
		caption: 'For corporations and partnerships. We assist in securing your SEC Certificate of Incorporation, Articles of Incorporation, and other required documents.'
	},
	{
		src: '/images/stock/sec.jpg',
		title: 'DTI Registration',
		caption: 'For sole proprietors. We handle the business name verification and registration with the Department of Trade and Industry.'
	},
	{
		src: '/images/stock/bir.jpg',
		title: 'BIR Registration',
		caption: 'Get your Certificate of Registration (Form 2303) and authority to print receipts. Includes registering books of accounts.'
	},
	{
		src: '/images/stock/lgu.jpg',
		title: 'Business Permit (LGU)',
		caption: 'We process mayor’s permits, Barangay clearances, and other local government licenses.'
	},
	{
		src: '/images/stock/benefits.jpg',
		title: 'SSS/PhilHealth/Pag-IBIG Registration',
		caption: 'Mandatory government contributions for both employers and employees.'
	},
	{
		src: '/images/stock/government.jpg',
		title: 'Other Government Registrations',
		caption: 'Mandatory government contributions for both employers and employees.'
	},
];

const cardComponents = cardData.map(data => (
	<ServiceCard data={data}  />
));

const OurServices = () => {
	return(
		<section className="min-h-[calc(100vh-4rem)] p-4 flex flex-col items-center gap-8" id="our-services">
			<div>
				<h2 className="font-inter font-extrabold text-3xl text-gray-800 text-center mb-2">Turn your business idea into reality—fast, legal, and hassle-free.</h2>

				<p className="font-inter font-light text-gray-800 text-center">We provide a full suite of services to get your business up and running legally.</p>
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
				{cardComponents}
			</div>

			<button className="font-inter font-semibold bg-[#7cb490] px-8 py-4 text-white rounded-md cursor-pointer border-b-6 border-[#4f735b] text-lg transition-all duration-300 ease-in-out  hover:bg-[#70a281] hover:scale-105">
				Read More
			</button>
		</section>
	);
};

export default OurServices;