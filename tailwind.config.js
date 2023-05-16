/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgBlack:'#1A1717'
      },
      fontFamily:{
        Chakra : ["Chakra Petch"],
        PathWay : ["Pathway Gothic One"]
      }
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "1150px",
      md: "1460px",
      lg: "1700px",
      xl: "1900px",
    },
  },
  plugins: [],
}

