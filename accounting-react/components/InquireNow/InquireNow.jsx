import React, { useEffect, useRef, useState } from "react";

const InquireNow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const sectionRef = useRef(null);

  // Sub-services
  const subServices = {
    "Business Registration Services": [
      "DTI Registration",
      "SEC Registration",
      "Barangay Clearance",
      "Business Permit",
    ],
    "Accounting & Bookkeeping Services": [
      "Monthly Bookkeeping",
      "Financial Statement Preparation",
      "Bank Reconciliation",
    ],
    "Tax & Regulatory Compliance": [
      "BIR Registration",
      "Monthly/Quarterly Tax Filing",
      "Annual Tax Return",
    ],
    "BIR One-Time Transactions": [
      "Estate Tax",
      "Capital Gains Tax",
      "Donor’s Tax",
    ],
    "Specialized Registrations & Compliance": [
      "PEZA Registration",
      "AMLC Registration",
      "BSP/DOLE/IPO Registration",
    ],
    "Business Support Services": [
      "Website Development",
      "Social Media Marketing",
      "Payroll System Setup",
    ],
  };

  // Fade-in animation
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
      className="flex flex-col items-center justify-center gap-16 px-6 py-16 bg-white lg:flex-row lg:items-start lg:justify-center lg:px-20"
    >
      {/* ✅ INQUIRE FORM */}
      <div className="flex justify-center w-full lg:w-1/2">
        <form
          className={`w-full max-w-md bg-[#f9fafb] border border-gray-100 p-10 rounded-2xl shadow-md flex flex-col gap-6 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h1 className="text-[#003a22] font-montserrat font-bold text-3xl mb-4 text-center">
            INQUIRE NOW!
          </h1>

          {/* Inputs */}
          {["Full Name*", "Email Address*", "Mobile Number*"].map(
            (placeholder, i) => (
              <input
                key={i}
                type={
                  placeholder.includes("Email")
                    ? "email"
                    : placeholder.includes("Mobile")
                    ? "tel"
                    : "text"
                }
                placeholder={placeholder}
                required
                className="w-full p-4 border border-[#003a22] rounded-md placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
              />
            )
          )}

          {/* Dropdown */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className="w-full p-4 border border-[#003a22] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          >
            <option value="">Select Service</option>
            {Object.keys(subServices).map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>

          {/* Sub-services */}
          {selectedService && (
            <div
              className={`p-4 border border-gray-200 rounded-xl bg-white shadow-sm transition-all duration-500 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <h3 className="text-md font-semibold mb-3 text-[#003a22]">
                Choose Sub-Services for {selectedService}:
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {subServices[selectedService].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      name="subservices[]"
                      value={item}
                      className="accent-[#003a22]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Inquiry */}
          <textarea
            placeholder="Inquiry / Message*"
            rows="4"
            required
            className="w-full p-4 border border-[#003a22] rounded-md placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          ></textarea>

          {/* Date */}
          <input
            type="datetime-local"
            className="w-full p-4 border border-[#003a22] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-[#003a22] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-[#025232] hover:shadow-xl transition-all duration-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>

      {/* ✅ FACEBOOK PAGE */}
      <div
        className={`flex flex-col items-center justify-center w-full lg:w-1/2 max-w-md transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
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
