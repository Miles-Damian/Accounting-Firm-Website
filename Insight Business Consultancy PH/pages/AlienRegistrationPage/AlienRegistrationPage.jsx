import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react";

const AlienRegistrationPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/alien-registration.jpg',
		heroHeading: 'ALIEN REGISTRATION SERVICES',
		subSectionHeading1: "Foreign nationals residing in the Philippines are required to register for proper documentation and legal stay.",
		subSectionSubHeading1: "We assist clients in preparing and filing Alien Certificate of Registration (ACR I-Card) applications and renewals.",
		subSectionSubHeading2: "With our guidance, you can ensure compliance with immigration laws and avoid unnecessary delays or penalties.",
		cardData: [
			{
				src: 'https://ibcph.com/images/stock/annual-report.jpg', title: 'Annual Report (A.R)',
				caption: 'Stay compliant with your annual reporting requirements through accurate and timely submissions.'
			},
			{
				src: 'https://ibcph.com/images/stock/acr-issuance.jpg',
				title: 'ACR I-CARD Issuance',
				caption: 'Secure your Alien Certificate of Registration (ACR I-Card) efficiently with our guidance through every step of the process.'
			},
			{
				src: 'https://ibcph.com/images/stock/voluntary-application.jpg',
				title: 'Voluntary Application for ACR I-CARD',
				caption: 'For foreign residents seeking proactive compliance, we facilitate the voluntary filing of ACR I-Card applications with complete documentation.'
			},
			{
				src: 'https://ibcph.com/images/stock/renewal-acr.jpg',
				title: 'Renewal of ACR I-CARD',
				caption: 'Avoid penalties and maintain your immigration status by letting us handle your ACR I-Card renewal smoothly and on time.'
			},
			{
				src: 'https://ibcph.com/images/stock/reissuance-acr.jpg',
				title: 'Re-Issuance of ACR I-CARD',
				caption: 'Lost or damaged ACR I-Card? We’ll assist you in requesting a re-issuance to restore your valid documentation quickly.'
			},
			{
				src: 'https://ibcph.com/images/stock/acr-waiver.jpg',
				title: 'ACR I-CARD Waiver',
				caption: 'We guide you through the process of applying for an ACR I-Card waiver when exemptions or special conditions apply.'
			},
			{
				src: 'https://ibcph.com/images/stock/cancellation-acr.jpg',
				title: 'Cancellation of ACR I-CARD',
				caption: 'When residency ends or circumstances change, we handle the proper cancellation of your ACR I-Card with full compliance.'
			},
			{
				src: 'https://ibcph.com/images/stock/philippine-born-registration.jpg',
				title: 'Philippine-Born Registration',
				caption: 'For children of foreign nationals born in the Philippines, we assist in registering their birth and obtaining the required immigration documents.'
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
				shortcutService={'Alien Registration'}
			/>
			<Footer/>
		</>
	);
};

export default AlienRegistrationPage;