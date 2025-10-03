// src/components/Accreditations/Accreditations.jsx
import React, { useEffect, useRef, useState } from "react";

const Card = ({ title, items, isVisible, delay }) => (
  <div
    className={`flex flex-col rounded-xl bg-white shadow-md transform transition-all duration-700 
    ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"} 
    hover:-translate-y-2 hover:shadow-xl`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map(({ text, logo }, index) => (
          <li
            key={text}
            className={`flex items-center group transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
            style={{ transitionDelay: `${delay + index * 150}ms` }} // stagger logos
          >
            <img
              src={logo}
              alt={text}
              className="flex-shrink-0 object-contain transition-transform duration-300 ease-in-out w-7 h-7 group-hover:scale-110"
            />
            <p className="ml-3 text-base text-gray-700 transition-colors duration-200 group-hover:text-green-700">
              {text}
            </p>
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
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            With our expertise and trusted accreditations, you can focus on
            growing your business while we take care of the details.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Licenses & Legal Registrations"
            items={[
              { text: "SEC Registered Corporation", logo: "/images/logo/SEC.png" },
              { text: "DTI Registered", logo: "/images/logo/DTI.png" },
              { text: "BIR Registered & Accredited", logo: "/images/logo/BIR.png" },
              { text: "LGU Business Permit", logo: "/images/logo/LGU.png" },
              { text: "SSS, PhilHealth, Pag-IBIG Registered Employer", logo: "/images/logo/SSS.png" },
              { text: "CDA Accreditation (if cooperative-related services apply)", logo: "/images/logo/CDA.png" },
            ]}
            isVisible={isVisible}
            delay={200}
          />

          <Card
            title="Professional Accreditations"
            items={[
              { text: "Board of Accountancy (BOA) Accredited CPAs", logo: "/images/logo/PRC.png" },
              { text: "PRC Licensed CPAs", logo: "/images/logo/PRC.png" },
            ]}
            isVisible={isVisible}
            delay={400}
          />

          <Card
            title="Software Certifications"
            items={[
              { text: "QuickBooks Certified ProAdvisor", logo: "/images/logo/quickbooks.png" },
              { text: "Xero Certified Advisor", logo: "/images/logo/xero.png" },
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
            className="inline-block rounded-full bg-[#4ce699] px-8 py-3 text-base font-semibold text-gray-900 shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[#3bd588]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
