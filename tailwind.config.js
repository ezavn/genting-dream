/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        txt: "#131313",
        red: "#D7182A",
        grey: "#F0F0F0",
        yellow: "#e5bf83",
      },
      margin: {
        section: "70px",
        sectionMB: "50px",
      },
      spacing: {
        section: "70px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
