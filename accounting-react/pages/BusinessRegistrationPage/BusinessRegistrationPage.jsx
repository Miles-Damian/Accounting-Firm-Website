import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BusinessRegistrationPage = () => {
	const businessServicesData = {
		heroImage: '/images/bg/building.jpg',
		heroHeading: 'Business Registration Services',
		subSectionHeading1: 'Turn your business idea into reality—fast, legal, and hassle-free.',
		subSectionSubHeading1: 'Starting a business shouldn’t be stressful. With our end-to-end registration services, we’ll take care of the legwork so you can focus on launching and growing.',
		subSectionSubHeading2: 'We save you weeks of back-and-forth with government offices, prevent costly mistakes, and give you peace of mind that your business is legally secured.',
		cardData: [
			{
				src: '/images/stock/dti.jpg',
				title: 'Sec Registration',
				caption: 'For corporations and partnerships. We assist in securing your SEC Certificate of Incorporation, Articles of Incorporation, and other required documents.'
			},
			{
				src: '/images/stock/sec.jpg',
				title: 'DTI Registration',
				caption: 'For sole proprietors. We handle the business name verification and registration with the Department of Trade and Industry.'
			},
			{
				src: '/images/stock/bir.jpg',
				title: 'BIR Registration',
				caption: 'Get your Certificate of Registration (Form 2303) and authority to print receipts. Includes registering books of accounts.'
			},
			{
				src: '/images/stock/lgu.jpg',
				title: 'Business Permit (LGU)',
				caption: 'We process mayor’s permits, Barangay clearances, and other local government licenses.'
			},
			{
				src: '/images/stock/benefits.jpg',
				title: 'SSS/PhilHealth/Pag-IBIG Registration',
				caption: 'Mandatory government contributions for both employers and employees.'
			},
			{
				src: '/images/stock/government.jpg',
				title: 'Other Government Registrations',
				caption: 'Mandatory government contributions for both employers and employees.'
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

export default BusinessRegistrationPage;