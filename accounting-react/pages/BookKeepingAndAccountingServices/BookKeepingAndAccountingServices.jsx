import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BookKeepingAndAccountingServices = () => {
	const businessServicesData = {
		heroImage: '/images/bg/accounting.jpg',
		heroHeading: 'Bookkeeping and Accounting Services',
		subSectionHeading1: 'Accurate financial records are the backbone of every successful business.',
		subSectionSubHeading1: 'We provide systematic bookkeeping and professional accounting services that make reporting, analysis, and decision-making easier.',
		subSectionSubHeading2: 'Ensures financial transparency, helps with compliance, and guides smart business growth.',
		cardData: [
			{
				src: '/images/stock/financial-statements.jpg',
				title: 'Financial Statement Preparation',
				caption: 'Monthly, quarterly, and annual financial reporting in compliance with accounting standards.'
			},
			{
				src: '/images/stock/computerized-accounting.jpg',
				title: 'Computerized Accounting',
				caption: 'Setup, registration, and maintenance of BIR-accredited accounting software.'
			},
			{
				src: '/images/stock/budget-forecasting.jpg',
				title: 'Financial Budget Forecasting',
				caption: 'Helps plan business growth, analyze cash flow, and prepare financial projections.'
			},
			{
				src: '/images/stock/losse-leaf.webp',
				title: 'Loose Leaf Books of Account',
				caption: 'Assistance in applying and registering for loose-leaf accounting books with the BIR.'
			},
		]
	};

	return (
		<>
			<Header />
			<ServicesHero
				heroImage={businessServicesData.heroImage} heroHeading={businessServicesData.heroHeading}
			/>
			<AboutService
				subSectionHeading1={businessServicesData.subSectionHeading1}
				subSectionSubHeading1={businessServicesData.subSectionSubHeading1}
				subSectionSubHeading2={businessServicesData.subSectionSubHeading2}
			/>
			<OurServices
				cardData={businessServicesData.cardData}
			/>
			<Footer />
		</>
	);
};

export default BookKeepingAndAccountingServices;