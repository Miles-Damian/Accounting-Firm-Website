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
        className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
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
            Our mission is to simplify business processes and empower entrepreneurs,
            SMEs, and corporations with expert legal, financial, and compliance support.
            We strive to help our clients operate with confidence, efficiency, and
            long-term sustainability.
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
              backgroundImage: "url('../public/images/random-images/mission.jpg')",
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
        className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
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
              backgroundImage: "url('../public/images/random-images/vision.jpg')",
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
            Our vision is to be the most trusted consultancy in the Philippines,
            known for innovation, reliability, and excellence. We aim to help
            businesses of all sizes achieve growth and stability, setting the
            standard for professional consultancy services nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
