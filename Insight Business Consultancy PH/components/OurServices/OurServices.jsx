import { useState, useEffect, useRef } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

const OurServices = (props) => {
  const sectionRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleContactShortcut = () => {
    navigate("/contact/#contact-us", {
      state: { shortcutService: props.shortcutService },
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 🟩 Create observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          setTimeout(() => setIsGridVisible(true), 200);
          setTimeout(() => setIsButtonVisible(true), 400);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.05, // ✅ Lower threshold so it triggers earlier on mobile
      }
    );

    observer.observe(section);

    // 🟩 Fallback for mobile browsers (force show after 1.5s)
    const timeout = setTimeout(() => {
      setIsTextVisible(true);
      setIsGridVisible(true);
      setIsButtonVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
      observer.unobserve(section);
    };
  }, []);

  // ✅ Generate service cards
  const cardComponents = props.cardData?.map((data, index) => (
    <ServiceCard data={data} key={`card${index}`} />
  ));

  const revealClasses = "transition-all duration-700 ease-in-out";

  return (
    <section
      ref={sectionRef}
      id="our-services"
      className="p-6 sm:p-10 flex flex-col items-center max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* 🔹 Text Section */}
      <div
        className={`text-center max-w-3xl mb-8 sm:mb-10 ${revealClasses} ${
          isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="mb-2 text-3xl font-extrabold text-gray-800 font-inter">
          Turn your business idea into reality—fast, legal, and hassle-free.
        </h2>
        <p className="font-light text-gray-800 font-inter lg:text-xl">
          We provide a full suite of services to get your business up and running legally.
        </p>
      </div>

      {/* 🔹 Cards Grid */}
      <div
        className={`grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full ${revealClasses} ${
          isGridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {cardComponents}
      </div>

      {/* 🔹 Button */}
      <button
        onClick={handleContactShortcut}
        className={`font-inter font-semibold bg-[#7cb490] px-8 py-4 text-white rounded-md cursor-pointer border-b-6 border-[#4f735b] text-lg my-12 hover:bg-[#70a281] hover:scale-105 transition-all duration-300 ease-in-out ${
          isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Book Now
      </button>
    </section>
  );
};

export default OurServices;
