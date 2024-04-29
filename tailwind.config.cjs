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
        h4: "1.25rem", //prompt font H4 og på MOBIL
        p: "1rem", //prompt font P og på MOBIL
        mh1special: "2.5rem", //dansestudiet font H1 forside MOBIL
        mh4special: "1.25rem", //dansestudiet font H2 forside MOBIL
        mh2: "2.125rem", //prompt font H2 MOBIL
      },
      spacing: {
        s: "20px", //small padding
        m: "40px", //medium padding
        l: "60px", //large padding
        xl: "100px", //xlarge padding
        ms: "10px", //small padding MOBIL
        mm: "20px", //medium padding MOBIL
        ml: "30px", //large padding MOBIL
        mxl: "50px", //xlarge padding MOBIL
      },
      borderRadius: {
        s: "12px", //small borderradius og på MOBIL
        m: "16px", //medium borderradius og på MOBIL
        l: "18px", //large borderradius og på MOBIL
        xxl: "40px", //xxlarge borderradius
        mxxl: "24px", //xxlarge borderradius MOBIL
      },
      backgroundImage: {
        herounit: "url('/src/assets/images/herounit.svg')", //forsidebillede
      },
    },
  },
};
