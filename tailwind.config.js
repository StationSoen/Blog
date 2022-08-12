/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gmarket: "GmarketSans",
        oneMobile: "ONE-Mobile-Title",
        nixgon: "NIXGONM-Vb",
        score: "S-CoreDream",
      },
      colors: {
        key: {
          lidi: "#1e93ff",
          manta: "#5343f3",
          blue: "#2c4173",
          light_blue: "#5d79b1",
          grey: "#6b7275",
        },
        w: {
          back: "#F9F9F9",
          d: "#C3C3C3",
          m: "#F1F1F1",
          l: "#FFFFFF",
        },

        b: {
          back: "#212121",
          d: "#262626",
          m: "#484848",
          l: "#7B7B7B",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
