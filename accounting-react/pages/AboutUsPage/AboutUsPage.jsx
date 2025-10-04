import React from "react";
import Header from "../../components/Header/Header";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import MissionVision from "../../components/MissionVision/MissionVision";
import CoreValues from "../../components/CoreValues/CoreValues";
import WhoWeServe from "../../components/WhoWeServe/WhoWeServe";
import LicenseSection from "../../components/LicenseSection/LicenseSection";
import Footer from "../../components/Footer/Footer";

function AboutUsPage(){
    return(
        <>
        <Header/>
        <AboutCompany/>
        <MissionVision/>
        <CoreValues/>
        <WhoWeServe/>
        <LicenseSection/>
        <Footer/>
        </>
    );
}
export default AboutUsPage;