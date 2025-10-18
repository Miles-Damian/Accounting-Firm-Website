import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const SpecialPermitsPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/special-permit.jpg',
		heroHeading: 'SPECIAL PERMIT SERVICES',
		subSectionHeading1: 'We assist foreign nationals in securing special permits to study, work, or engage in professional activities in the Philippines.',
		subSectionSubHeading1: 'Our team ensures complete and compliant documentation for quick approval from the Bureau of Immigration and related agencies.',
		subSectionSubHeading2: 'With proper handling, you can begin your studies or employment legally and without delays.',
		cardData: [
		  {
			src: 'https://ibcph.com/images/stock/provisional-work.jpg',
			title: 'Provisional Work Permit',
			caption: 'Assistance in securing provisional work permits for foreigners awaiting their long-term employment visa approval.'
		  },
		  {
			src: 'https://ibcph.com/images/stock/commercial-work.jpg',
			title: 'Special Work Permit – Commercial',
			caption: 'We facilitate special work permits for short-term commercial assignments or professional engagements in the Philippines.'
		  },
		  {
			src: 'https://ibcph.com/images/stock/artist-athlete.jpg',
			title: 'Special Work Permit – Artists & Athletes',
			caption: 'We assist in obtaining work permits for visiting artists, performers, and athletes participating in events or competitions.'
		  }
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
				shortcutService={'Special Permits'}
			/>
			<Footer />
		</>
	);
};

export default SpecialPermitsPage;