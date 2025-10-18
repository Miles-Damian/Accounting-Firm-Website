import { Link } from "react-router-dom";
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
      className="w-full px-6 py-12 overflow-hidden text-black bg-gradient-to-b from-green-100 to-green-200"
    >
      <div className="grid grid-cols-1 gap-12 mx-auto text-center max-w-7xl sm:grid-cols-2 lg:grid-cols-4 font-montserrat lg:text-left">

        {/* QUICK LINKS */}
        <div
          className={`flex flex-col items-center lg:items-start border-b border-black/30 lg:border-b-0 lg:border-r lg:pr-6 transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h3 className="mb-4 text-xl font-bold">QUICK LINKS</h3>
          <ul className="space-y-2 text-base">
            <li className="cursor-pointer hover:underline"><Link to="/">HOME</Link></li>
            <li className="cursor-pointer hover:underline"><Link to="/about">ABOUT</Link></li>
            <li className="cursor-pointer hover:underline"><Link to="/faq">FAQs</Link></li>
            <li className="cursor-pointer hover:underline"><Link to="/contact">CONTACT</Link></li>
            <li className="cursor-pointer hover:underline"><Link to="/careers">CAREERS</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div
          className={`flex flex-col items-center lg:items-start border-b border-black/30 lg:border-b-0 lg:border-r lg:pr-6 transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="mb-4 text-xl font-bold">SERVICES</h3>
          <ul className="space-y-2 text-base">
            <li>Business Registration Services</li>
            <li>Accounting & Bookkeeping Services</li>
            <li>Tax & Regulatory Compliance</li>
            <li>BIR One-Time Transactions</li>
            <li>Specialized Registrations & Compliance</li>
            <li>Alien Registration Services</li>
            <li>Certification Services</li>
            <li>Citizenship Services</li>
            <li>Special Permit Services</li>
          </ul>
        </div>

        {/* OFFICE HOURS & ADDRESS */}
        <div
          className={`flex flex-col items-center lg:items-start border-b border-black/30 lg:border-b-0 lg:border-r lg:pr-6 transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="mb-4 text-xl font-bold">OFFICE HOURS</h3>
          <p className="mb-2">Monday - Saturday</p>
          <p className="mb-4">9:00am - 5:00pm</p>

          <h3 className="mb-4 text-xl font-bold">ADDRESS</h3>
          <p>8th Floor, Doña Elena Tower 47 P. Sanchez corner 3rd Street</p>
          <p>Brgy. 605 Zone 060 1008 Sta. Mesa-0004</p>
          <p>City of Manila, First District Philippines</p>
        </div>

        {/* LOGO & CONTACT */}
        <div
          className={`flex flex-col items-center lg:items-start transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Business Logo */}
          <img
            src="https://ibcph.com/images/logo/logo.png"
            alt="Business Logo"
            className="h-auto mb-4 w-50"
          />
          <p className="mb-4 font-semibold text-center lg:text-left">
            - Your One-Stop Partner for Business Growth -
          </p>

          {/* CONTACT ICONS WITH TOOLTIPS */}
          <div className="flex items-center justify-center mb-4 space-x-5 lg:justify-start">
            {/* PHONE */}
            <div className="relative group">
              <a href="tel:+639123456789">
                <img
                  src="https://ibcph.com/images/random-images/phone.png"
                  alt="Phone"
                  className="w-[40px] h-auto cursor-pointer transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 text-sm rounded-lg bg-[#004524] text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
               +63 939 927 0318
              </span>
            </div>

            {/* FACEBOOK */}
            <div className="relative group">
              <a
                href="https://facebook.com/insightconsultancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ibcph.com/images/random-images/fb.png"
                  alt="Facebook"
                  className="w-[40px] h-auto cursor-pointer transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 text-sm rounded-lg bg-[#004524] text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                facebook.com/insightconsultancy
              </span>
            </div>

            {/* EMAIL */}
            <div className="relative group">
              <a href="mailto:inquiry@ibcph.com">
                <img
                  src="https://ibcph.com/images/random-images/email.png"
                  alt="Email"
                  className="w-[40px] h-auto cursor-pointer transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 text-sm rounded-lg bg-[#004524] text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                inquiry@ibcph.com
              </span>
            </div>

            {/* BOOK NOW */}
<div className="relative group">
  <Link to="/contact">
    <img
      src="https://ibcph.com/images/random-images/booknow.png"
      alt="Book Now"
      className="w-[120px] h-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
    />
  </Link>
  <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 text-sm rounded-lg bg-[#004524] text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
    Book an Appointment
  </span>
</div>

          </div>

          {/* Dynamic Time */}
          <div className="bg-white text-[#003a22] font-mono font-bold text-lg px-6 py-3 rounded-lg shadow-md">
            {formattedTime}
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div
        className={`mt-10 border-t border-black/30 pt-6 text-center text-sm transform transition-all duration-700 ${
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
