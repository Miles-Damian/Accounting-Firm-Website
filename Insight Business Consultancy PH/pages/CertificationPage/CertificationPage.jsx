import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const CertificationPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/images/bg/certification.jpg',
		heroHeading: 'CERTIFICATION SERVICES',
		subSectionHeading1: 'Get official certifications for business or personal requirements—accurate, compliant, and on time.',
		subSectionSubHeading1: 'We prepare, validate, and process requests (e.g., company certifications, government clearances, notarized statements) with complete documentation.',
		subSectionSubHeading2: 'We coordinate with the proper agencies and ensure timely release to help you avoid delays, rework, and penalties.',

		cardData: [
			{
				src: 'https://ibcph.com/images/stock/not-same-person.jpg',
				title: 'Certification for Not the Same Person',
				caption: 'We assist in securing certification to verify identity differences or name discrepancies in official records.'
			  },
			  {
				src: 'https://ibcph.com/images/stock/acr-certification.jpg',
				title: 'ACR I-CARD Certification',
				caption: 'Obtain certification for your Alien Certificate of Registration (ACR I-Card) to verify immigration compliance or personal record updates.'
			  },
			  {
				src: 'https://ibcph.com/images/stock/bi-clearance.jpg',
				title: 'BI Clearance Certification',
				caption: 'We process Bureau of Immigration clearance certifications to confirm your good standing and lawful stay in the Philippines.'
			  },
			  {
				src: 'https://ibcph.com/images/stock/pending-visa.jpg',
				title: 'Pending Visa Application Certification',
				caption: 'Secure certification for ongoing visa applications to support employment, travel, or legal documentation requirements.'
			  },
			  {
				src: 'https://ibcph.com/images/stock/true-copy.jpg',
				title: 'Certified True Copy Certification',
				caption: 'We help authenticate and certify true copies of official immigration or legal documents for valid government and private use.'
			  },
			  {
				src: 'https://ibcph.com/images/stock/travel-records.jpg',
				title: 'Travel Records Certification',
				caption: 'Obtain official travel movement records from the Bureau of Immigration for visa, employment, or verification purposes.'
			  },
			  {
				src: 'https://ibcph.com/images/stock/non-registration.jpg',
				title: 'Certificate of Non-Registration / Registration',
				caption: 'We process certifications confirming whether an individual is registered or unregistered with the Bureau of Immigration, ensuring accurate record validation.'
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
				shortcutService={'Certification'}
			/>
			<Footer />
		</>
	);
};

export default CertificationPage;