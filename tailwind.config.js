/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      

      screens: {
        minMobil: "320px",
        // => @media (min-width: 320px) { ... }

        mobil: "425px",
        // => @media (min-width: 425px) { ... }

        tablet: "700px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        fullHd: "1440px",
      },
    },
  },
  plugins: [],
}