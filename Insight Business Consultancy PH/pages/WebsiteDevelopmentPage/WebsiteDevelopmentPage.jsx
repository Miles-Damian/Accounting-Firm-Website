import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const WebsiteDevelopmentPage = () => {
  const businessServicesData = {
    heroImage: "https://ibcph.com/images/bg/Website-Development.jpg",
    heroHeading: "WEBSITE DEVELOPMENT SERVICES",
    subSectionHeading1:
      "We design and build professional websites tailored to your brand, audience, and business goals.",
    subSectionSubHeading1:
      "Our team combines creative design, strategic content, and modern technologies to establish your online presence effectively.",
    subSectionSubHeading2:
      "From small business pages to enterprise-level solutions, we create responsive, secure, and SEO-ready websites that deliver measurable results.",
    cardData: [
      {
        src: "/images/stock/web-development.webp",
        title: "Website Development",
        caption:
          "Empower your business growth with our complete web development service from design to deployment."
      },
      {
        src: "https://ibcph.com/images/stock/website-maintenance.jpg",
        title: "Website Maintenance & Support",
        caption:
          "Regular updates, backups, and performance monitoring to keep your website running smoothly and securely."
      },
    ]
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <ServicesHero
        heroImage={businessServicesData.heroImage}
        heroHeading={businessServicesData.heroHeading}
      />
      <AboutService
        subSectionHeading1={businessServicesData.subSectionHeading1}
        subSectionSubHeading1={businessServicesData.subSectionSubHeading1}
        subSectionSubHeading2={businessServicesData.subSectionSubHeading2}
      />
      <OurServices
        cardData={businessServicesData.cardData}
        shortcutService={"Website Development"}
      />
      <Footer />
    </>
  );
};

export default WebsiteDevelopmentPage;
