// src/components/Accreditations/Accreditations.jsx
import React, { useEffect, useRef, useState } from "react";

// simple inline icon
const VerifiedIcon = (props) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`h-5 w-5 flex-none ${props.className ?? ""}`}
    fill="currentColor"
  >
    <path d="M12 2.25c.3 0 .6.09.84.27l2.12 1.53 2.57-.43c.58-.1 1.15.22 1.36.77l.94 2.47 2.14 1.47c.49.34.66.99.39 1.52l-1.2 2.35.57 2.55c.13.6-.19 1.2-.76 1.43l-2.47.97-1.35 2.15c-.33.52-.97.74-1.54.53L12 20.6l-2.71 1.16c-.57.24-1.21 0-1.54-.53l-1.35-2.15-2.47-.97a1.25 1.25 0 0 1-.76-1.43l.57-2.55-1.2-2.35a1.25 1.25 0 0 1 .39-1.52l2.14-1.47.94-2.47c.21-.55.78-.87 1.36-.77l2.57.43 2.12-1.53c.24-.18.54-.27.84-.27Zm-1.07 12.03 4.5-4.5a.9.9 0 1 0-1.27-1.27l-3.86 3.86-1.53-1.53a.9.9 0 0 0-1.27 1.27l2.17 2.17c.35.35.92.35 1.26 0Z" />
  </svg>
);

const Card = ({ title, items, isVisible, delay }) => (
  <div
    className={`flex flex-col rounded-xl bg-white shadow-md transition-all duration-700 
    ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"} `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((txt) => (
          <li key={txt} className="flex items-start">
            <VerifiedIcon className="text-[#4ce699]" />
            <p className="ml-3 text-base text-gray-700">{txt}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Accreditations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f6f8f7] font-display text-gray-800 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 -translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            At Insight Business Consultancy Inc., we make business simple. From
            legal registration and compliance to accounting, payroll, and
            digital support, we provide comprehensive consultancy services
            designed for entrepreneurs, SMEs, and corporations.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            With our expertise and trusted accreditations, you can focus on
            growing your business while we take care of the details.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Licenses & Legal Registrations"
            items={[
              "SEC Registered Corporation",
              "DTI Registered",
              "BIR Registered & Accredited",
              "LGU Business Permit",
              "SSS, PhilHealth, Pag-IBIG Registered Employer",
              "CDA Accreditation (if cooperative-related services apply)",
            ]}
            isVisible={isVisible}
            delay={200}
          />

          <Card
            title="Professional Accreditations"
            items={[
              "Board of Accountancy (BOA) Accredited CPAs",
              "PRC Licensed CPAs",
            ]}
            isVisible={isVisible}
            delay={400}
          />

          <Card
            title="Software Certifications"
            items={[
              "QuickBooks Certified ProAdvisor",
              "Xero Certified Advisor",
            ]}
            isVisible={isVisible}
            delay={600}
          />
        </div>

        {/* Button */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="#"
            className="inline-block rounded-full bg-[#4ce699] px-8 py-3 text-base font-semibold text-gray-900 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-[#3bd588]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
