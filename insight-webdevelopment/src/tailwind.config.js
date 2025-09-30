/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // all html/js inside src
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Montserrat", "sans-serif"], // makes it the default font
      },
    },
  },
  plugins: [],
};
