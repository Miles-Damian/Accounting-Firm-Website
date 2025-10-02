import Header from "../../components/Header/Header";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";

const ServicesPage = () => {
	return (
		<>
			<Header />
			<ServicesHero />
			<AboutService />
			<OurServices />
		</>
	);
};

export default ServicesPage;