/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         inria:["Inria Sans", "sans-serif"],
          poppins:["Poppins", "sans-serif"],
          jost:["Jost", "sans-serif"]
      },
      backgroundImage:{
        banner:"url('./src/assets/bg_banner.png')",
        banner2:"url('./src/assets/banner.jpeg')"

      }
    },
  },
  plugins: [],
}