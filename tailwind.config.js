/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    },
    colors: {
      primary: '#18181b',
      secondary: '#26272b',
      accent: '#092134',
      purpleLight: '#26272b',
      purpeleMedium: '#26272b',
      purpleDark: '#444153',
      blueLight: '#57afc6',



      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}

