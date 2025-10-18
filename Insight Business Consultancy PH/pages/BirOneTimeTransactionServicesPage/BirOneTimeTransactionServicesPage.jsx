import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const BirOneTImeTransactionServicesPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/bir-ai.png',
		heroHeading: 'BIR ONE TIME TRANSACTIONS',
		subSectionHeading1: 'Some tax transactions happen only once but require careful documentation and filing.',
		subSectionSubHeading1: 'We help individuals and businesses process these special cases smoothly.',
		subSectionSubHeading2: 'Proper handling avoids delays, penalties, and legal issues in high-value or sensitive transactions.',
		cardData: [
			{
				src: 'https://ibcph.com/images/stock/sales.jpg',
				title: 'Sales',
				caption: 'Tax clearance, document preparation, and filing for asset or property sale.'
			},
			{
				src: 'https://ibcph.com/images/stock/assistance.jpg',
				title: 'Donation',
				caption: 'Assistance with donor’s tax, deed of donation, and compliance requirements.'
			},
			{
				src: 'https://ibcph.com/images/stock/estate.jpg',
				title: 'Estate',
				caption: 'Estate tax settlement, filing, and documentation for heirs and executors.'
			},
		]
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

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
				shortcutService={'BIR One Time Transactions'}
			/>
			<Footer />
		</>
	);
};

export default BirOneTImeTransactionServicesPage;