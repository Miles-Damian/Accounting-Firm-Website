import Header from "../../components/Header/Header";
import Accreditations from "../../components/Accreditations/Accreditations";
import OurExpertiseSection from "../../components/OurExpertiseSection/OurExpertiseSection";
import WhyWorkWithUs from "../../components/WhyWorkWithUs/WhyWorkWithUs";
import Industries from "../../components/Industries/Industries";
import HomeHero from "../../components/HomeHero/HomeHero";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import InquireNow from "../../components/InquireNow/InquireNow";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
	return (
		<>
			<Header />
			<HomeHero />
			<Accreditations />
			<OurExpertiseSection />
			<WhyWorkWithUs />
			<Industries />
			<InquireNow />
			<NewsFeed />
			<GoogleMap />
			<Footer />
		</>
	);
};

export default HomePage;