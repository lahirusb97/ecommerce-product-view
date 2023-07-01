/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#F33939",
      litered: "#F3DBDB",
      black: "#343434",
      darkgray: "#6D6D6D",
      midlegray: "#979797",
      litegray: "#EDEDED",
      bgcolor: "#F3DBDB",
      white: "#FFFFFF",
      darkblue: "#546882",
      bglitecolor: "#FFF6EE",
    },
    screens: {
      xsm: "490px",
      b1000: "925px",
    },

    extend: {},
  },
  plugins: [],
};
