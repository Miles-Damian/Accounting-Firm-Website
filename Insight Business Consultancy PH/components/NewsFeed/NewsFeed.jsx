import React, { useEffect, useRef, useState } from "react";

/* ============================================================
   📰 NEWS CARD COMPONENT — matches your OLD DESIGN
   ============================================================ */
const NewsCard = ({ img, alt, category, title, desc, delay, isVisible }) => (
  <div
    className={`flex flex-col h-full transform transition-all duration-700 cursor-pointer ${
      isVisible
        ? "opacity-100 rotate-0 translate-y-0"
        : "opacity-0 rotate-6 translate-y-10"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1">
      {/* ✅ Top Image */}
      <img
        src={img}
        alt={alt}
        className="object-cover w-full h-64 transition-transform duration-300 rounded-t-xl hover:scale-105"
      />

      {/* ✅ Text Content */}
      <div className="flex flex-col flex-grow px-6 py-4">
        <p className="mb-2 text-sm font-semibold uppercase text-cyan-600 md:text-base">
          {category}
        </p>
        <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 md:text-xl hover:text-cyan-600">
          {title}
        </h3>
        <p className="flex-grow text-sm text-gray-700 md:text-base">{desc}</p>
      </div>
    </div>
  </div>
);

/* ============================================================
   🧭 MAIN SECTION — uses your Google Sheet (Nocode API)
   ============================================================ */
const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Fetch from Nocode API (Google Sheet)
  useEffect(() => {
    fetch("https://v1.nocodeapi.com/kurt123/google_sheets/OQqhWMzzPoBmeypY?tabId=Sheet1")
      .then((response) => response.json())
      .then((result) => {
        console.log("✅ Fetched Data:", result);
        if (result.data && Array.isArray(result.data)) {
          setNews(result.data.slice(0, 3)); // show top 3
        }
      })
      .catch((error) => console.error("❌ Error fetching data:", error));
  }, []);

  // ✅ Scroll-in Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden bg-gray-50">
      {/* ✅ Title */}
      <h1
        className={`text-3xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        LATEST NEWS AND EVENTS
      </h1>

      {/* ✅ News Grid */}
      <div className="grid items-stretch grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {news.length > 0 ? (
          news.map((item, index) => (
            <NewsCard
              key={item.row_id || index}
              img={item.image_converted || item.image}
              alt={item.alt || "News image"}
              category={item.category}
              title={item.title}
              desc={item.desc}
              delay={index * 150}
              isVisible={isVisible}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Loading news...
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
