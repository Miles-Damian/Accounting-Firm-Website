import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import { useState } from "react";

const ServicesPage = () => {
	const selectedService = useState(businessServicesData);

	const businessServicesData = {
		heroImage: '/images/bg/building.jpg',
		heroHeading: 'Business Registration Services',
		subSectionHeading1: 'Turn your business idea into reality—fast, legal, and hassle-free.',
		subSectionSubHeading1: 'Starting a business shouldn’t be stressful. With our end-to-end registration services, we’ll take care of the legwork so you can focus on launching and growing.',
		subSectionHeading2: 'Why Choose Us?',
	};

	const bookKeepingAndAccountingServicesData = {
		heroImage: '/images/bg/building.jpg',
		heroHeading: 'Business Registration Services',
		subSectionHeading1: 'Turn your business idea into reality—fast, legal, and hassle-free.',
		subSectionSubHeading1: 'Starting a business shouldn’t be stressful. With our end-to-end registration services, we’ll take care of the legwork so you can focus on launching and growing.',
		subSectionHeading2: 'Why Choose Us?',
	};

	return (
		<>
			<ServicesHero heroImage={selectedService.heroImage}  mainHeading={selectedService.mainHeading} />
			<AboutService />
			<OurServices />
		</>
	);
};

export default ServicesPage;