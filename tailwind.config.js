/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#f4f4f5", // Light grey background
        pureWhite: "#ffffff",
        pureBlack: "#171717", // Soft black
        accentOrange: "#ea580c", // Vibrant orange
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "sans-serif"],
        arabic: ["IBM Plex Arabic", "sans-serif"],
      }
    },
  },
  plugins: [],
};
