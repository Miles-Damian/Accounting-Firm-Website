// src/components/ContactUs/ContactUs.jsx
import React, { useEffect, useRef, useState } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className="px-6 py-16 overflow-hidden bg-white lg:px-20 font-montserrat"
    >
      {/* Section Heading */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003a22] mb-6">
          INQUIRE AND CONTACT US
        </h2>
        <p className="mb-12 text-center text-gray-600">
          We’d Love to Hear From You
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* LEFT SIDE - FORM */}
        <form
          className={`bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col gap-5 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          {["Full Name*", "Email Address*", "Mobile Number*"].map((placeholder, i) => (
            <input
              key={i}
              type={placeholder.includes("Email") ? "email" : placeholder.includes("Mobile") ? "tel" : "text"}
              placeholder={placeholder}
              className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}

          {/* Dropdown */}
          <select className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <option value="">Select Service</option>
            <option>Business Registration</option>
            <option>Accounting</option>
            <option>Tax Compliance</option>
            <option>Payroll</option>
            <option>BIR One-Time Transactions</option>
            <option>Specialized Registration</option>
            <option>Business Support</option>
          </select>

          <textarea
            placeholder="Inquiry / Message*"
            rows="4"
            className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          ></textarea>

          <input
            type="datetime-local"
            className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />

          <button
            type="submit"
            className="mt-4 bg-[#003a22] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-[#025232] hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Submit Inquiry
          </button>
        </form>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div
          className={`flex flex-col gap-8 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {[
  { icon: "fa-solid fa-phone", text: "0961-694-637$" },
  {
    icon: "fa-solid fa-envelope",
    text: (
      <div className="flex flex-col">
        <a href="mailto:inquire@insightbusinessconsultancyinc.ph" className="hover:underline">
          inquire@insightbusinessconsultancyinc.ph
        </a>
        <a href="mailto:recruitment@insightbusinessconsultancyinc.ph" className="hover:underline">
          recruitment@insightbusinessconsultancyinc.ph
        </a>
      </div>
    ),
  },
  {
    icon: "fa-brands fa-facebook text-[#1877f2]",
    text: (
      <a href="#" className="text-lg text-blue-600 hover:underline">
        Facebook Page
      </a>
    ),
  },
  {
    icon: "fa-solid fa-location-dot",
    text: (
      <p className="text-lg">
        8th Floor, Doña Elena Tower 47 P. Sanchez corner 3rd Street,
        Brgy. 605 Zone 060, Sta. Mesa, 1008 Manila, First District Philippines
      </p>
    ),
  },
  {
    icon: "fa-solid fa-clock",
    text: "Monday to Saturday: 8:00am – 5:00pm",
  },
].map((item, i) => (
  <div
    key={i}
    style={{ transitionDelay: `${i * 200}ms` }} // ✅ delay only for scroll
    className={`flex items-center gap-4 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      transition-opacity transition-transform duration-[1000ms] ease-in-out
      hover:scale-105 hover:text-green-800 hover:duration-200 hover:ease-out`} // ✅ hover is fast
  >
    <i
      className={`${item.icon} text-2xl text-[#003a22]
        transition-transform duration-200 ease-out   // ✅ fast hover only
        hover:rotate-12 hover:scale-125`}
    ></i>
    <span className="text-lg">{item.text}</span>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
