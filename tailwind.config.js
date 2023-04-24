/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: "'Nunito', sans-serif"
    },
    extend: {
      colors: {
        redText: "#f13c20",
        greenText: "#5cdb95",
        whiteText: "#907163",
        bgColor: "#1a1a1d"
      },
      // backgroundImage: {
      //   "bgImage": "url('/src/img/a.jpg')"
      // }
    },
  },
  plugins: [],
}