import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react";

const CitizenshipPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/citizenship.jpg',
		heroHeading: 'CITIZENSHIP SERVICES',
		subSectionHeading1: 'We guide individuals through the process of acquiring, retaining, or confirming Philippine citizenship under Republic Act No. 9225 and related laws.',
		subSectionSubHeading1: 'Our services cover all documentation, filing, and coordination with the Bureau of Immigration and other government agencies to ensure smooth processing.',
		subSectionSubHeading2: 'With our professional support, you can secure your citizenship status efficiently and avoid delays in legal compliance.',
		cardData: [
			{
				src: 'https://ibcph.com/images/stock/retention.jpg',
				title: 'Application for Retention / Re-acquisition of Phil. Citizenship',
				caption: 'We assist former Filipino citizens in retaining or re-acquiring their Philippine citizenship under R.A. 9225 for dual citizenship privileges.'
			},
			{
				src: 'https://ibcph.com/images/stock/dependents.jpg',
				title: 'Inclusion of Dependents under R.A. 9225',
				caption: 'We process the inclusion of qualified dependents in the re-acquisition or retention application to extend citizenship privileges to family members.'
			},
			{
				src: 'https://ibcph.com/images/stock/recognition.jpg',
				title: 'Recognition as Filipino Citizen',
				caption: 'Assistance for individuals born to Filipino parents abroad in obtaining official recognition as Filipino citizens.'
			},
			{
				src: 'https://ibcph.com/images/stock/affirmation.jpg',
				title: 'Affirmation of Recognition as Filipino Citizen',
				caption: 'We help in securing affirmation documents confirming citizenship recognition granted by the Bureau of Immigration.'
			},
			{
				src: 'https://ibcph.com/images/stock/acr-cancellation.jpg',
				title: 'Cancellation of Alien Certificate of Registry (ACR)',
				caption: 'Once citizenship is confirmed, we process the cancellation of your Alien Certificate of Registry to finalize your transition as a Filipino citizen.'
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
				shortcutService={'Citizenship'}
			/>
			<Footer/>
		</>
	);
};

export default CitizenshipPage;