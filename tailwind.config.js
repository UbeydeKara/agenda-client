// tailwind theme
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // toggling dark mode manually, use the class strategy instead of the media strategy
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // tailwind doesn't support dynamic classes, need to use safelist
  safelist: [
    {
      pattern: /space-(x|y)-(2|4)/,
    },
  ],
  // override theme
  theme: {
    // alternative mx-auto
    colors: {
      // default theme colors
      primary: {
        '50': '#fff1f1',
        '100': '#ffe1e1',
        '200': '#ffc7c7',
        '300': '#ffa0a0',
        '400': '#ff6b6b',
        '500': '#f83b3b',
        '600': '#e51d1d',
        '700': '#c11414',
        '800': '#a01414',
        '900': '#841818',
        '950': '#480707',
      },
      ...colors
    },
    container: {
      center: true,
    },
    extend: {
      // override default font
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
