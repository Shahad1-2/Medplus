/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        medGreen:"#1FAA59",
        medDark:"#064E3B"
      }
    },
  },
  plugins: [],
}
