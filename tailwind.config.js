/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {},

    colors: {
      primary: "#1B1E22",

      secondary: "#26272b",

      accent: "#092134",

      purpleLight: "#CFFF4D",

      purpeleMedium: "#03A981",

      purpleDark: "#444153",

      blueLight: "#57afc6",

      greenLight: "#32da85",

      grey: "#636366",

      greyDark: "#1B1E22",

      transparent: "transparent",

      current: "currentColor",

      blackGrey: "#24282D",

      blackDark: "#111316",

      black: colors.black,

      white: colors.white,

      gray: colors.gray,

      emerald: colors.emerald,

      indigo: colors.indigo,

      yellow: colors.yellow,
    },
  },

  plugins: [],
};
