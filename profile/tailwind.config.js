/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen1: "#081c15",
        darkGreen2: "#004b23",
        darkGreen3: "#006400",
        green1: "#007200",
        green2: "#008000",
        green3: "#38b000",
        green4: "#70e000",
        green5: "#9ef01a",
        green6: "#ccff33",
        yellow1: "#ffc300",
        yellow2: "#ffd60a",
        brown1: "#250902",
        brown2: "#38040e",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        tangerine: ["Tangerine", "cursive"],
        tinos: ["Tinos", "serif"],
      },
    },
  },
  plugins: [],
};
