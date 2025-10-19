import React from "react";
import Header from "../../components/Header/Header";
import HomeHero from "../../components/HomeHero/HomeHero";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const ContactPage = () => {
	return (
		<>
			<Header/>
			{/* <HomeHero/> */}
			<ContactUs/>
			<GoogleMap/>
			<Footer/>
		</>
	);
};

export default ContactPage;