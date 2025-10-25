import ServicesHero from "../../components/ServicesHero/ServicesHero";
import AboutService from "../../components/AboutService/AboutService";
import OurServices from "../../components/OurServices/OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const ImmigrationPage = () => {
  const businessServicesData = {
    heroImage: "https://ibcph.com/images/bg/alien-registration.jpg",
    heroHeading: "IMMIGRATION SERVICES",
    subSectionHeading1:
      "Our Immigration Services combine Alien Registration, Citizenship, and Certification assistance to ensure full compliance with Philippine immigration laws.",
    subSectionSubHeading1:
      "We handle all aspects of immigration—from registration and documentation to legal certification—so you can focus on your stay, work, or business in the Philippines.",
    subSectionSubHeading2:
      "With our expert guidance, we ensure your immigration records and applications are processed smoothly, accurately, and on time.",

    /* 🔹 MERGED SUB-SERVICES (Alien Registration + Citizenship + Certification) */
    cardData: [
      // ===== ALIEN REGISTRATION =====
      {
        src: "https://ibcph.com/images/stock/annual-report.jpg",
        title: "Annual Report (A.R)",
        caption:
          "Stay compliant with your annual reporting requirements through accurate and timely submissions."
      },
      {
        src: "https://ibcph.com/images/stock/acr-issuance.jpg",
        title: "ACR I-CARD Issuance",
        caption:
          "Secure your Alien Certificate of Registration (ACR I-Card) efficiently with our guidance through every step of the process."
      },
      {
        src: "https://ibcph.com/images/stock/voluntary-application.jpg",
        title: "Voluntary Application for ACR I-CARD",
        caption:
          "For foreign residents seeking proactive compliance, we facilitate the voluntary filing of ACR I-Card applications with complete documentation."
      },
      {
        src: "https://ibcph.com/images/stock/renewal-acr.jpg",
        title: "Renewal of ACR I-CARD",
        caption:
          "Avoid penalties and maintain your immigration status by letting us handle your ACR I-Card renewal smoothly and on time."
      },
      {
        src: "https://ibcph.com/images/stock/reissuance-acr.jpg",
        title: "Re-Issuance of ACR I-CARD",
        caption:
          "Lost or damaged ACR I-Card? We’ll assist you in requesting a re-issuance to restore your valid documentation quickly."
      },
      {
        src: "https://ibcph.com/images/stock/acr-waiver.jpg",
        title: "ACR I-CARD Waiver",
        caption:
          "We guide you through the process of applying for an ACR I-Card waiver when exemptions or special conditions apply."
      },
      {
        src: "https://ibcph.com/images/stock/cancellation-acr.jpg",
        title: "Cancellation of ACR I-CARD",
        caption:
          "When residency ends or circumstances change, we handle the proper cancellation of your ACR I-Card with full compliance."
      },
      {
        src: "https://ibcph.com/images/stock/philippine-born-registration.jpg",
        title: "Philippine-Born Registration",
        caption:
          "For children of foreign nationals born in the Philippines, we assist in registering their birth and obtaining the required immigration documents."
      },

      // ===== CITIZENSHIP =====
      {
        src: "https://ibcph.com/images/stock/retention.jpg",
        title:
          "Application for Retention / Re-acquisition of Philippine Citizenship",
        caption:
          "We assist former Filipino citizens in retaining or re-acquiring their Philippine citizenship under R.A. 9225 for dual citizenship privileges."
      },
      {
        src: "https://ibcph.com/images/stock/dependents.jpg",
        title: "Inclusion of Dependents under R.A. 9225",
        caption:
          "We process the inclusion of qualified dependents in the re-acquisition or retention application to extend citizenship privileges to family members."
      },
      {
        src: "https://ibcph.com/images/stock/recognition.jpg",
        title: "Recognition as Filipino Citizen",
        caption:
          "Assistance for individuals born to Filipino parents abroad in obtaining official recognition as Filipino citizens."
      },
      {
        src: "https://ibcph.com/images/stock/affirmation.jpg",
        title: "Affirmation of Recognition as Filipino Citizen",
        caption:
          "We help in securing affirmation documents confirming citizenship recognition granted by the Bureau of Immigration."
      },
      {
        src: "https://ibcph.com/images/stock/acr-cancellation.jpg",
        title: "Cancellation of Alien Certificate of Registry (ACR)",
        caption:
          "Once citizenship is confirmed, we process the cancellation of your Alien Certificate of Registry to finalize your transition as a Filipino citizen."
      },

      // ===== CERTIFICATION =====
      {
        src: "https://ibcph.com/images/stock/not-same-person.jpg",
        title: "Certification for Not the Same Person",
        caption:
          "We assist in securing certification to verify identity differences or name discrepancies in official records."
      },
      {
        src: "https://ibcph.com/images/stock/acr-certification.jpg",
        title: "ACR I-CARD Certification",
        caption:
          "Obtain certification for your Alien Certificate of Registration (ACR I-Card) to verify immigration compliance or personal record updates."
      },
      {
        src: "https://ibcph.com/images/stock/bi-clearance.jpg",
        title: "BI Clearance Certification",
        caption:
          "We process Bureau of Immigration clearance certifications to confirm your good standing and lawful stay in the Philippines."
      },
      {
        src: "https://ibcph.com/images/stock/pending-visa.jpg",
        title: "Pending Visa Application Certification",
        caption:
          "Secure certification for ongoing visa applications to support employment, travel, or legal documentation requirements."
      },
      {
        src: "https://ibcph.com/images/stock/true-copy.jpg",
        title: "Certified True Copy Certification",
        caption:
          "We help authenticate and certify true copies of official immigration or legal documents for valid government and private use."
      },
      {
        src: "https://ibcph.com/images/stock/travel-records.jpg",
        title: "Travel Records Certification",
        caption:
          "Obtain official travel movement records from the Bureau of Immigration for visa, employment, or verification purposes."
      },
      {
        src: "https://ibcph.com/images/stock/non-registration.jpg",
        title: "Certificate of Non-Registration / Registration",
        caption:
          "We process certifications confirming whether an individual is registered or unregistered with the Bureau of Immigration, ensuring accurate record validation."
      }
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
        shortcutService={"Immigration"}
      />
      <Footer />
    </>
  );
};

export default ImmigrationPage;
