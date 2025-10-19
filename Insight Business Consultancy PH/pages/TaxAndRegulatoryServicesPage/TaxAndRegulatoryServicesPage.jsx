import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react";

const TaxAndRegulationServicesPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/tax-compute.jpg',
		heroHeading: 'Tax & Regulatory Compliance',
		subSectionHeading1: 'Taxes and government filings can be complex and time-consuming.',
		subSectionSubHeading1: 'Our team ensures that all your obligations are filed accurately and on time, helping you avoid penalties and unnecessary stress.',
		subSectionSubHeading2: 'Prevents costly mistakes, ensures compliance with BIR, SEC, and government agencies.',
		cardData: [
			{
				src: 'https://ibcph.com/images/stock/bir-filling.jpg',
				title: 'BIR Filings & Reports',
				caption: 'Monthly, quarterly, and annual tax filing services (VAT, Income Tax, Withholding Tax, etc.).'
			},
			{
				src: 'https://ibcph.com/images/stock/sec.webp',
				title: 'SEC Filing (GIS & AFS)',
				caption: 'Filing of General Information Sheets and Audited Financial Statements with SEC.'
			},
			{
				src: 'https://ibcph.com/images/stock/ss-phil-ibig.jpg',
				title: 'SSS/PhilHealth/Pag-IBIG Compliance',
				caption: 'Monthly contribution filing and remittances.'
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
			<Header/>
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
				shortcutService={'Tax & Regulatory Compliance'}
			/>
			<Footer/>
		</>
	);
};

export default TaxAndRegulationServicesPage;