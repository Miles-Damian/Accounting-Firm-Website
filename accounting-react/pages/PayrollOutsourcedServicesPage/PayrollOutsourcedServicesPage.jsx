import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const PayrollOutsourcedServicesPage = () => {
	const businessServicesData = {
		heroImage: 'https://ibcph.com/accounting-react/images/bg/payroll.jpg',
		heroHeading: 'Payroll Outsourced Services',
		subSectionHeading1: 'Managing employee payroll can be complicated with taxes, deductions, and benefits to consider.',
		subSectionSubHeading1: 'We provide a full payroll outsourcing solution so you can focus on growing your business while ensuring employees are paid correctly and on time.',
		subSectionSubHeading2: 'Accurate, timely payroll builds employee trust and keeps you compliant with labor and tax laws.',
		cardData: [
			{
				src: 'https://ibcph.com/accounting-react/images/stock/payroll-processing.jpg',
				title: 'Payroll Processing',
				caption: 'Salary computation, deductions, benefits, and payslip generation'
			},
			{
				src: 'https://ibcph.com/accounting-react/images/stock/attendance.jpg',
				title: 'Automated Attendance Tracking',
				caption: 'Integration of biometric or cloud-based attendance for accurate timekeeping.'
			},
			{
				src: 'https://ibcph.com/accounting-react/images/stock/compensation-tax.jpg',
				title: 'Compensation Tax Filing',
				caption: 'Monthly and annual filing of withholding taxes on compensation.'
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
				shortcutService={'Payroll Outsourced Services'}
			/>
			<Footer />
		</>
	);
};

export default PayrollOutsourcedServicesPage;