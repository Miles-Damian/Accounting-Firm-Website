import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"; // ✅ for reading ?service=

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const sectionRef = useRef(null);
  const [searchParams] = useSearchParams();

  // ✅ form data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    service: "",
    subservices: [],
    message: "",
    datetime: "",
  });

  const [status, setStatus] = useState({ loading: false, message: "", success: false });

  // 🔹 Define sub-services
  const subServices = {
    "Business Registration": [
      "SEC Registration",
      "DTI Registration",
      "BIR Registration",
      "Business Permit (LGU)",
      "SSS/PhilHealth/Pag-IBIG Registration",
      "Other Government Registrations",
    ],
    Accounting: [
      "Financial Statement Preparation",
      "Computerized Accounting",
      "Financial Budget Forecasting",
      "Loose Leaf Books of Account",
    ],
    "Tax Compliance": [
      "BIR Filings & Reports",
      "SEC Filing (GIS & AFS)",
      "SSS/PhilHealth/Pag-IBIG Compliance",
    ],
    Payroll: [
      "Payroll Processing",
      "Automated Attendance Tracking",
      "Compensation Tax Filing",
    ],
    "BIR One-Time Transactions": ["Sales", "Donation", "Estate"],
    "Specialized Registration": [
      "SEC Amendments",
      "AMLC Registration",
      "DOLE Registration",
      "IPO Registration",
      "PEZA Registration",
      "BSP Registration",
    ],
    "Business Support": ["Website Development", "Social Media Marketing"],
  };

  // ✅ detect ?service=
  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
      setFormData((prev) => ({ ...prev, service: serviceFromUrl }));
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [searchParams]);

  // ✅ animation observer
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

  // ✅ input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        subservices: checked
          ? [...prev.subservices, value]
          : prev.subservices.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", success: false });

    try {
      const response = await fetch("https://ibcph.com/accounting-react/backend/send_mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus({ loading: false, message: "✅ Inquiry sent successfully!", success: true });
        setFormData({
          fullname: "",
          email: "",
          mobile: "",
          service: "",
          subservices: [],
          message: "",
          datetime: "",
        });
        setSelectedService("");
      } else {
        const err = await response.text();
        setStatus({ loading: false, message: `❌ ${err}`, success: false });
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: "❌ Network error. Check Apache or PHP path.",
        success: false,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 py-16 overflow-hidden bg-white pt-35 lg:px-20 font-montserrat"
    >
      {/* Heading */}
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

      {/* 2 Columns */}
      <div className="grid max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* LEFT FORM */}
        <form
          onSubmit={handleSubmit}
          className={`bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col gap-5 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          {/* Inputs */}
          <input
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name*"
            required
            className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address*"
            required
            className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            type="tel"
            placeholder="Mobile Number*"
            className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />

          {/* Dropdown */}
          <select
            name="service"
            value={selectedService}
            onChange={(e) => {
              setSelectedService(e.target.value);
              handleChange(e);
            }}
            className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            required
          >
            <option value="">Select Service</option>
            {Object.keys(subServices).map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>

          {/* Subservices */}
          {selectedService && (
            <div
              className={`p-4 border-2 border-gray-200 rounded-xl bg-white shadow-sm transition-all duration-700 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <h3 className="text-lg font-semibold mb-3 text-[#003a22]">
                Choose Sub-Services for {selectedService}:
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {subServices[selectedService].map((item, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="subservices"
                      value={item}
                      checked={formData.subservices.includes(item)}
                      onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            placeholder="Inquiry / Message*"
            rows="4"
            required
            className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          ></textarea>

          <input
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            type="datetime-local"
            className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="mt-4 bg-[#003a22] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-[#025232] hover:scale-105 hover:shadow-xl transition-all duration-300"
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

        {/* RIGHT CONTACT INFO */}
        <div
          className={`flex flex-col gap-8 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {[
            { icon: "fa-solid fa-phone", text: "+639-399-270-318" },
            {
              icon: "fa-solid fa-envelope",
              text: (
                <div className="flex flex-col">
                  <a
                    href="mailto:inquiry@ibcph.com"
                    className="hover:underline"
                  >
                    inquiry@ibcph.com
                  </a>
                  <a
                    href="mailto:careers@ibcph.com"
                    className="hover:underline"
                  >
                    careers@ibcph.com
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
              style={{ transitionDelay: `${i * 200}ms` }}
              className={`flex items-center gap-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } transition-opacity transition-transform duration-[1000ms] ease-in-out hover:scale-105 hover:text-green-800`}
            >
              <i
                className={`${item.icon} text-2xl text-[#003a22] transition-transform duration-200 ease-out hover:rotate-12 hover:scale-125`}
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
