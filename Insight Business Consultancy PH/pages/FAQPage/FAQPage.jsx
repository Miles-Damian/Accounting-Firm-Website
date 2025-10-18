import React from "react";
import { motion } from "motion/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const faqs = [
  {
    q: "How much do your services cost?",
    a: "Our fees depend on the specific service and complexity of your requirements. We offer customized, affordable packages so you only pay for what you need. We’ll provide a clear quotation after a free consultation."
  },
  {
    q: "How long will it take to complete the service?",
    a: "Timelines vary depending on the agency involved (e.g., SEC, BIR, LGU). For example, DTI registration can take 1–2 days, while SEC registration may take 2–4 weeks. Rest assured, we always aim for the fastest possible processing."
  },
  {
    q: "Do I still need to go to government offices myself?",
    a: "In most cases, no need. We handle the paperwork, submissions, and follow-ups for you. If personal appearance is required (e.g., signing or biometrics), we’ll prepare everything in advance to save you time."
  },
  {
    q: "Can I trust you with confidential documents?",
    a: "Absolutely. We follow strict confidentiality and data security protocols. All your documents are handled with professionalism, and we only use them for official processing."
  },
  {
    q: "Do you offer ongoing support after registration or compliance?",
    a: "Yes. Many of our clients continue with us for accounting, tax, and payroll services. We’re not just a registration service—we’re your long-term business partner."
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve a wide range of industries—retail, services, IT, real estate, export, finance, and more. Whether you’re a startup or a corporation, our expertise adapts to your business needs."
  },
  {
    q: "What makes you different from other consultancy firms?",
    a: "At Insight Business Consultancy, we combine expertise, affordability, and convenience. Unlike others, we don’t just process—we guide, advise, and support your business growth every step of the way."
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-30 font-display">
      <Header />

      <main className="container px-6 py-20 mx-auto">
        <motion.h2
          className="mb-16 text-5xl font-extrabold text-center text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* SINGLE COLUMN */}
        <div className="flex flex-col max-w-4xl gap-6 mx-auto">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="overflow-hidden bg-white border border-green-200 shadow-lg group rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <summary className="flex items-center justify-between px-8 py-6 list-none transition-all duration-300 cursor-pointer hover:bg-green-50">
                <h3 className="text-2xl font-semibold text-[#004524]">
                  {faq.q}
                </h3>
                <svg
                  className="text-green-700 transition-transform duration-300 h-7 w-7 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="px-8 pb-6 text-lg leading-relaxed text-gray-700">
                {faq.a}
              </p>
            </motion.details>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
