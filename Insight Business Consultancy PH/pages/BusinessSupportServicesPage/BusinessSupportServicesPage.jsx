import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react";

const BusinessSupportServicesPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/support.jpg',
		heroHeading: 'BUSINESS SUPPORT SERVICES',
		subSectionHeading1: 'Beyond compliance, we also help businesses strengthen their presence and reach more customers.',
		subSectionSubHeading1: 'With our digital solutions, we provide the tools to help you compete in today’s online-driven market.',
		subSectionSubHeading2: 'Builds visibility, credibility, and competitive advantage in your industry.',
		cardData: [
			{
				src: 'https://ibcph.com/images/stock/web-dev.jpg',
				title: 'Website Development',
				caption: 'Professional websites with responsive design, SEO optimization, and CMS integration.'
			},
			{
				src: 'https://ibcph.com/images/stock/socmed-marketing.webp',
				title: 'Social Media Marketing',
				caption: 'Content planning, advertising campaigns, and social media management.'
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
				shortcutService={'Business Support Services'}
			/>
			<Footer/>
		</>
	);
};

export default BusinessSupportServicesPage;