import React, { useEffect, useRef, useState } from "react";

const InquireNow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    message: "",
    datetime: "",
  });
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  const [status, setStatus] = useState({ loading: false, message: "", success: false });
  const sectionRef = useRef(null);

  // ✅ Sub-services
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

  // ✅ Fade-in animation
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

  // ✅ Handle input changes
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Handle sub-services
  const handleSubService = (value) => {
    setSelectedSubServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  // ✅ Submit form (same as ContactUs)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", success: false });

    const payload = {
      ...formData,
      service: selectedService,
      subservices: selectedSubServices.join(", "),
    };

    try {
      const response = await fetch("https://ibcph.com/accounting-react/backend/send_mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });

      if (response.ok) {
        setStatus({ loading: false, message: "✅ Inquiry sent successfully!", success: true });
        setFormData({
          fullname: "",
          email: "",
          mobile: "",
          message: "",
          datetime: "",
        });
        setSelectedService("");
        setSelectedSubServices([]);
      } else {
        const err = await response.text();
        setStatus({ loading: false, message: `❌ ${err}`, success: false });
      }
    } catch (err) {
      setStatus({ loading: false, message: "⚠️ Network error. Please try again.", success: false });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-16 px-6 py-16 bg-white lg:flex-row lg:justify-between lg:gap-24 lg:px-32 xl:px-48"
    >
      {/* ✅ INQUIRE FORM */}
      <div className="flex justify-center w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-md bg-[#f9fafb] border border-gray-100 p-10 rounded-2xl shadow-md flex flex-col gap-6 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h1 className="text-[#003a22] font-montserrat font-bold text-3xl mb-4 text-center">
            INQUIRE NOW!
          </h1>

          <input
            type="text"
            name="fullname"
            placeholder="Full Name*"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full p-4 border border-[#003a22] rounded-md placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border border-[#003a22] rounded-md placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number*"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-4 border border-[#003a22] rounded-md placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          />

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
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <h3 className="text-md font-semibold mb-3 text-[#003a22]">
                Choose Sub-Services for {selectedService}:
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {subServices[selectedService].map((item, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedSubServices.includes(item)}
                      onChange={() => handleSubService(item)}
                      className="accent-[#003a22]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          )}

          <textarea
            name="message"
            placeholder="Inquiry / Message*"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 border border-[#003a22] rounded-md placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          ></textarea>

          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            className="w-full p-4 border border-[#003a22] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-all duration-300"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="mt-4 bg-[#003a22] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-[#025232] hover:shadow-xl transition-all duration-300"
          >
            {status.loading ? "Sending..." : "Submit Inquiry"}
          </button>

          {status.message && (
            <p
              className={`text-center mt-2 ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>

      {/* ✅ FACEBOOK PAGE */}
      <div
        className={`flex flex-col items-center justify-center w-full lg:w-1/2 lg:mr-30 max-w-md transition-all duration-1000 ease-in-out ${
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
