// src/components/Footer/Footer.jsx
import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <footer
      ref={sectionRef}
      className="w-full bg-[#62924c] text-white py-12 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-montserrat text-center lg:text-left">
        
        {/* QUICK LINKS */}
        <div
          className={`flex flex-col items-center lg:items-start border-b border-white/30 lg:border-b-0 lg:border-r lg:pr-6 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-base">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Downloads</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div
          className={`flex flex-col items-center lg:items-start border-b border-white/30 lg:border-b-0 lg:border-r lg:pr-6 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="text-xl font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-base">
            <li>Business Registration Services</li>
            <li>Tax Compliance</li>
            <li>Bookkeeping & Accounting Services</li>
            <li>Legal Compliance Services</li>
            <li>Administration Services</li>
          </ul>
        </div>

        {/* OFFICE HOURS & ADDRESS */}
        <div
          className={`flex flex-col items-center lg:items-start border-b border-white/30 lg:border-b-0 lg:border-r lg:pr-6 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="text-xl font-bold mb-4">OFFICE HOURS</h3>
          <p className="mb-2">Monday - Saturday</p>
          <p className="mb-4">9:00am - 5:00pm</p>

          <h3 className="text-xl font-bold mb-4">ADDRESS</h3>
          <p>8th Floor, Doña Elena Tower 47 P. Sanchez corner 3rd Street</p>
          <p>Brgy. 605 Zone 060 1008 Sta. Mesa-0004</p>
          <p>City of Manila, First District Philippines</p>
        </div>

        {/* LOGO & CONTACT */}
        <div
          className={`flex flex-col items-center lg:items-start transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Business Logo */}
          <img
            src="/images/random-images/Picture1.png"
            alt="Business Logo"
            className="w-[209px] h-[40px] mb-4"
          />
          <p className="font-semibold mb-4">
            - Your One-Stop Partner for Business Growth -
          </p>
          
          {/* Icons */}
          <div className="flex space-x-3 mb-4">
            <img src="/images/random-images/phone.png" alt="Phone" className="w-[40px] h-[40px]" />
            <img src="/images/random-images/fb.png" alt="Facebook" className="w-[40px] h-[40px]" />
            <img src="/images/random-images/email.png" alt="Email" className="w-[40px] h-[40px]" />
            <img src="/images/random-images/booknow.png" alt="Book Now" className="w-[120px] h-[40px]" />
          </div>

          {/* Dynamic Time */}
          <div className="bg-white text-[#003a22] font-mono font-bold text-lg px-6 py-3 rounded-lg shadow-md">
            {formattedTime}
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div
        className={`mt-10 border-t border-white/30 pt-6 text-center text-sm transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        © {new Date().getFullYear()} Insight Business Consultancy Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
