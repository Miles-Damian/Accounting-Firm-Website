// src/components/InquireNow/InquireNow.jsx
import React, { useEffect, useRef, useState } from "react";

const InquireNow = () => {
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
      className="flex flex-col justify-between gap-12 px-6 py-16 overflow-hidden bg-white 2xl:flex-row lg:px-12 xl:px-20"
    >
      {/* INQUIRE NOW FORM */}
      <form
        className={`flex flex-col w-full max-w-lg mx-auto items-center bg-white shadow-md p-8 rounded-2xl transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 -translate-x-10 scale-95"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        <h1 className="text-[#003a22] font-montserrat font-bold text-3xl md:text-4xl mb-6 text-center">
          INQUIRE NOW!
        </h1>

        <div className="flex flex-col w-full gap-5">
          {/* First & Last Name */}
<div className="flex flex-col w-full gap-5 sm:flex-row">
  <input
    type="text"
    placeholder="First Name*"
    className="w-full sm:flex-1 min-w-0 p-4 border-2 border-emerald-900 rounded-lg placeholder-[#003a22] 
               focus:outline-none focus:ring-2 focus:ring-emerald-700 
               transition duration-200 hover:-translate-y-1 hover:shadow-md"
  />
  <input
    type="text"
    placeholder="Last Name*"
    className="w-full sm:flex-1 min-w-0 p-4 border-2 border-emerald-900 rounded-lg placeholder-[#003a22] 
               focus:outline-none focus:ring-2 focus:ring-emerald-700 
               transition duration-200 hover:-translate-y-1 hover:shadow-md"
  />
</div>

          {/* Other Inputs */}
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          />

          {/* Select */}
          <select
            id="select_inquiry"
            className="w-full p-4 border-2 rounded-lg font-montserrat text-base placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <option value="">Select Inquiry</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
          </select>

          {/* Textarea */}
          <textarea
            id="your_inquiry"
            placeholder="Your Inquiry*"
            className="w-full p-4 h-[120px] border-2 rounded-lg font-montserrat text-base placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="flex items-center justify-center mt-6 bg-[#003a22] text-white rounded-full px-6 py-3 font-semibold shadow-lg transition-all duration-200 hover:bg-[#025232] hover:scale-105"
        >
          Submit Now
          <img
            src="/public/images/random-images/arrow-button.png"
            className="w-[9px] h-[10px] ml-2 mt-1"
            alt="Arrow"
          />
        </button>
      </form>

      {/* FACEBOOK PAGE */}
      <div
        className={`flex flex-col items-center w-full max-w-md mx-auto transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-10 scale-95"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-[#003a22] mb-6 text-center">
          FACEBOOK PAGE
        </h1>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLuzonNMofficial%2F&tabs=timeline&width=430&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          className="w-full h-[650px] rounded-2xl border-4 border-emerald-900 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Page"
        ></iframe>
      </div>
    </section>
  );
};

export default InquireNow;
