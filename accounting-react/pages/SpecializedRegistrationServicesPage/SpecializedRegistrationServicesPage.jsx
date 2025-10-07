import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SpecializedRegistrationServicesPage = () => {
	const businessServicesData = {
		heroImage: '/images/bg/registration.jpg',
		heroHeading: 'SPECIALIZED REGISTRATION & COMPLIANCE',
		subSectionHeading1: 'Certain industries and corporate structures require specialized government registrations.',
		subSectionSubHeading1: 'We assist businesses in completing these advanced compliance needs for continued growth and expansion.',
		subSectionSubHeading2: 'Grants access to government incentives, secures investor confidence, and ensures regulatory approval.',
		cardData: [
			{
				src: '/images/stock/sec-ammend.png',
				title: 'SEC Amendments',
				caption: 'Amendments in articles, by-laws, corporate structure, or business activities.'
			},
			{
				src: '/images/stock/amlc.webp',
				title: 'AMLC Registration',
				caption: 'Registration and compliance for covered institutions under Anti-Money Laundering laws.'
			},
			{
				src: '/images/stock/dole.webp',
				title: 'DOLE Registration',
				caption: 'Employer registration with the Department of Labor and Employment.'
			},
			{
				src: '/images/stock/ipo.jpg',
				title: 'IPO Registration',
				caption: 'Guidance in preparing requirements for initial public offering (IPO).'
			},
			{
				src: '/images/stock/peza.webp',
				title: 'PEZA Registration',
				caption: 'Incentives and compliance registration with the Philippine Economic Zone Authority.'
			},
			{
				src: '/images/stock/bsp.webp',
				title: 'BSP Registration',
				caption: 'Registration with the Bangko Sentral ng Pilipinas for financial service providers.'
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

export default SpecializedRegistrationServicesPage;