// src/components/HomeHero.jsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function HomeHero({
  bgSrc = "https://ibcph.com/accounting-react/images/bg/building-filter.png",
  cards,
}) {
  const defaultCards = useMemo(
    () => [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    ],
    []
  );

  const navigate = useNavigate();
  const images = cards && cards.length > 0 ? cards : defaultCards;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };

  const handleBulletClick = (i) => {
    if (i === index) return;
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section
      className="relative w-full overflow-hidden pb-25 pt-30"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/30" />

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-8 md:gap-10 md:py-20 lg:grid-cols-2 lg:py-24 xl:px-0">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.h1
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#004524] sm:text-4xl md:text-[44px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to Insight Business Consultancy Inc.
          </motion.h1>

          <motion.p
            className="mt-5 text-lg font-medium text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Your One-Stop Partner for Business Growth
          </motion.p>

          <motion.p
            className="mt-4 text-[17px] font-semibold text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Ready to take your business to the next level?
          </motion.p>

          <motion.p
            className="mt-2 text-base leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Let Insight Business Consultancy Inc. handle the paperwork,
            compliance, and digital support so you can focus on growth.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            {/* ✅ INQUIRE NOW button with green border style */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="relative inline-flex items-center justify-center rounded-full border-2 border-[#004524]
                bg-[#7FE881] text-[#004524] font-semibold tracking-wide px-8 py-3 
                shadow-[4px_4px_0px_#004524] transition-all duration-300
                hover:bg-[#69D36C] hover:shadow-[6px_6px_0px_#00391F]
                focus:outline-none focus-visible:ring focus-visible:ring-green-300/50"
            >
              INQUIRE NOW
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT: CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center w-full max-w-lg mx-auto md:max-w-xl lg:max-w-2xl"
        >
          <div className="relative h-[420px] w-full select-none overflow-hidden sm:h-[480px] md:h-[520px]">
            <div className="hidden w-full h-full md:block">
              <AnimatePresence initial={false} custom={direction}>
                {[-1, 0, 1].map((offset, layerIdx) => {
                  const imgIdx = (index + offset + images.length) % images.length;
                  const isCenter = offset === 0;
                  const x = offset * 240;
                  const scale = isCenter ? 1 : 0.9;
                  const opacity = isCenter ? 1 : 0.65;
                  const z = isCenter ? 30 : 20 - Math.abs(offset);

                  return (
                    <motion.div
                      key={`md-${layerIdx}-${index}`}
                      className={`absolute inset-0 m-auto h-[78%] w-[74%] rounded-[32px] shadow-xl ${
                        isCenter ? "shadow-[0_0_44px_rgba(25,138,67,0.35)]" : ""
                      }`}
                      style={{ zIndex: z }}
                      initial={{ x: direction > 0 ? 120 : -120, opacity: 0.7, scale: 0.95 }}
                      animate={{ x, opacity, scale }}
                      exit={{ x: direction > 0 ? -120 : 120, opacity: 0.6 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <motion.div
                        className={`h-full w-full overflow-hidden rounded-[32px] ${
                          isCenter ? "blur-0" : "blur-[4px]"
                        }`}
                        style={{
                          backgroundImage: `url(${images[imgIdx]})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        animate={
                          isCenter
                            ? { boxShadow: ["0 0 25px rgba(25,138,67,0.25)", "0 0 45px rgba(25,138,67,0.45)"] }
                            : {}
                        }
                        transition={
                          isCenter
                            ? { repeat: Infinity, repeatType: "mirror", duration: 2.5, ease: "easeInOut" }
                            : {}
                        }
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* MOBILE VERSION */}
            <div className="relative w-full h-full md:hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`sm-${index}`}
                  className="absolute inset-0 m-auto h-[78%] w-[90%] rounded-[28px] shadow-[0_0_44px_rgba(25,138,67,0.35)] shadow-xl"
                  initial={{ x: direction > 0 ? 120 : -120, opacity: 0.7 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -120 : 120, opacity: 0.6 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.div
                    className="h-full w-full overflow-hidden rounded-[28px]"
                    style={{
                      backgroundImage: `url(${images[index]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 25px rgba(25,138,67,0.25)",
                        "0 0 45px rgba(25,138,67,0.45)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="absolute z-40 p-2 transition -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/30 backdrop-blur hover:bg-black/50 hover:scale-110"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="absolute z-40 p-2 transition -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/30 backdrop-blur hover:bg-black/50 hover:scale-110"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Bullets */}
            <div className="absolute z-40 flex items-center gap-3 -translate-x-1/2 bottom-12 left-1/2 md:bottom-12">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleBulletClick(i)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    i === index ? "bg-[#198A43] scale-125" : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ✅ OLD VIEW MORE BUTTON (kept same as before) */}
          <motion.div
            className="absolute bottom-[-56px] left-1/2 z-40 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-emerald-500 shadow-emerald-900/30 hover:bg-emerald-600 hover:shadow-emerald-700/50 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/50 md:text-base"
            >
              VIEW MORE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
