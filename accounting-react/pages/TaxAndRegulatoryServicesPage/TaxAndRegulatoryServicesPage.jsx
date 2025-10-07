import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const TaxAndRegulationServicesPage = () => {
	const businessServicesData = {
		heroImage: '/images/bg/tax-compute.jpg',
		heroHeading: 'Tax & Regulatory Compliance',
		subSectionHeading1: 'Taxes and government filings can be complex and time-consuming.',
		subSectionSubHeading1: 'Our team ensures that all your obligations are filed accurately and on time, helping you avoid penalties and unnecessary stress.',
		subSectionSubHeading2: 'Prevents costly mistakes, ensures compliance with BIR, SEC, and government agencies.',
		cardData: [
			{
				src: '/images/stock/bir-filling.jpg',
				title: 'BIR Filings & Reports',
				caption: 'Monthly, quarterly, and annual tax filing services (VAT, Income Tax, Withholding Tax, etc.).'
			},
			{
				src: '/images/stock/sec.webp',
				title: 'SEC Filing (GIS & AFS)',
				caption: 'Filing of General Information Sheets and Audited Financial Statements with SEC.'
			},
			{
				src: '/images/stock/ss-phil-ibig.jpg',
				title: 'SSS/PhilHealth/Pag-IBIG Compliance',
				caption: 'Monthly contribution filing and remittances.'
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

export default TaxAndRegulationServicesPage;