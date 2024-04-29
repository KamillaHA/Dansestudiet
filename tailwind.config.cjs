/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      colors: {
        bla3: "#006774", //farve til primær knap & H2 forside
        bla4: "#004B54", //farve til hover primær knap
        bla5: "#003037", //farve til klik primær knap
        gul3: "#F5A917", //farve til sekundær knap
        gul4: "#D59212", //farve til hover sekundær knap
        gul5: "#98670A", //farve til klik sekundær knap
        gra1: "#EFEFEF", //farve til header, footer og baggrundsfarve på sections
        gra3: "#4D4645", //farve til tekst
        hvid: "#FFFFFF", //farve til speciel font H1, H2 og H3
      },
      fontFamily: {
        special: ["Dansestudiet Simple"],
        normal: ["Prompt", "sans-serif"],
      },
      fontSize: {
        h1special: "8rem", //dansestudiet font H1 forside
        h2special: "3rem", //dansestudiet font H2 forside
        h2: "2.25rem", //prompt font H2
        h4: "1.25rem", //prompt font H4
        p: "1rem", //prompt font P
      },
      backgroundImage: {
        herounit: "url('/src/assets/images/herounit.svg')", //forsidebillede
      },
    },
  },
};
