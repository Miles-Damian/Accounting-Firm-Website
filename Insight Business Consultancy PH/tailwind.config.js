// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'min-1415': '1415px', // show only from 1415px and up
      },

      colors: {
        primary: "#004524",
        secondary: "#003d20",
        accent: "#99e17a",
        highlight: "#00b894",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // 👈 Global font
        montserrat: ["Montserrat", "sans-serif"], // 👈 Optional utility font
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUpDelay: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-out forwards",
        slideUpDelay: "slideUpDelay 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

