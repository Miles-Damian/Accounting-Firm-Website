import React, { useEffect, useRef, useState } from "react";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState({ mission: false, vision: false });
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <section className="container px-6 py-20 mx-auto space-y-32 font-montserrat">
      {/* === OUR MISSION === */}
      <div
        ref={missionRef}
        data-section="mission"
        className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 2xl:mt-20"
      >
        {/* Text Left */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 ${
            isVisible.mission
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase">
            Our Mission
          </h2>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Empowering Businesses to Grow with Confidence
          </h1>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          To empower entrepreneurs and businesses by delivering reliable, transparent, and value-driven accounting and business consultancy services.

          </p>
        </div>

        {/* Image Right */}
        <div
          className={`relative flex justify-center transition-all duration-700 ${
            isVisible.mission
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div
            className="relative w-80 h-80 md:w-96 md:h-96 bg-cover bg-center shadow-2xl border-8 border-white rounded-[2rem] hover:scale-105 hover:shadow-xl transition-transform duration-500"
            style={{
              backgroundImage: "url('https://ibcph.com/images/random-images/mission.jpg')",
            }}
          >
            <div className="absolute inset-0 rounded-[2rem] border-4 border-green-600 opacity-90"></div>
          </div>
        </div>
      </div>

      {/* === OUR VISION === */}
      <div
        ref={visionRef}
        data-section="vision"
        className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 2xl:mt-50"
      >
        {/* Image Left */}
        <div
          className={`relative flex justify-center order-last lg:order-first transition-all duration-700 ${
            isVisible.vision
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div
            className="relative transition-transform duration-500 bg-center bg-cover border-8 border-white rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: "url('https://ibcph.com/images/random-images/vision.jpg')",
            }}
          >
            <div className="absolute inset-0 border-4 border-green-600 rounded-full opacity-90"></div>
          </div>
        </div>

        {/* Text Right */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 ${
            isVisible.vision
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase">
            Our Vision
          </h2>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            A Future Where Businesses Thrive Without Limits
          </h1>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          To become a leading business consultancy firm recognized for excellence, integrity, and innovation in supporting enterprise growth across the Philippines.

          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
