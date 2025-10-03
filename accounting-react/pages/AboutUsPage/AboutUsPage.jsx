import React from "react";
import Header from "../../components/Header/Header";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import MissionVision from "../../components/MissionVision/MissionVision";
import Footer from "../../components/Footer/Footer";

function AboutUsPage(){
    return(
        <>
        <Header/>
        <AboutCompany/>
        <MissionVision/>
        <Footer/>
        </>
    );
}
export default AboutUsPage;