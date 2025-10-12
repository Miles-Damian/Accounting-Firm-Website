import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import for navigation
import ServiceCard from "../ServiceCard/ServiceCard";

const OurServices = (props) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // ✅ router hook

  // Create separate state for each element group to stagger animations
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations with delays
          setIsTextVisible(true);
          setTimeout(() => setIsGridVisible(true), 200);
          setTimeout(() => setIsButtonVisible(true), 400);

          observer.unobserve(section); // Animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  // Render service cards
  const cardComponents = props.cardData.map((data, index) => (
    <ServiceCard data={data} key={`card${index}`} />
  ));

  // Common reveal animation classes
  const revealClasses = 'transition-all duration-700 ease-in-out';

  // ✅ Handle Book Now click
  const handleBookNow = () => {
    // Navigate to contact page and include service name in URL
    if (props.serviceName) {
      navigate(`/contact?service=${encodeURIComponent(props.serviceName)}`);
    } else {
      navigate(`/contact`);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[calc(100vh-4rem)] p-4 flex flex-col items-center max-w-[1400px] mx-auto overflow-hidden"
      id="our-services"
    >
      {/* Text heading */}
      <div
        className={`p-12 ${revealClasses} ${
          isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="mb-2 text-3xl font-extrabold text-center text-gray-800 font-inter">
          Turn your business idea into reality—fast, legal, and hassle-free.
        </h2>
        <p className="font-light text-center text-gray-800 font-inter lg:text-xl">
          We provide a full suite of services to get your business up and running legally.
        </p>
      </div>

      {/* Service cards */}
      <div
        className={`grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full ${revealClasses} ${
          isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {cardComponents}
      </div>

      {/* ✅ Book Now button */}
      <button
        onClick={handleBookNow} // Navigate to contact page
        className={`
          font-inter font-semibold bg-[#7cb490] px-8 py-4 text-white rounded-md cursor-pointer
          border-b-6 border-[#4f735b] text-lg my-12
          hover:bg-[#70a281] hover:scale-105
          transition-all duration-300 ease-in-out
          ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        Book Now
      </button>
    </section>
  );
};

export default OurServices;