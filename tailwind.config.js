// tailwind theme
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // toggling dark mode manually, use the class strategy instead of the media strategy
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // datepicker
  ],
  // tailwind doesn't support dynamic classes, need to use safelist
  safelist: [
    {
      pattern: /space-(x|y)-([0-9])/
    },
    {
      pattern: /gap-([0-9])/
    }
  ],
  // override theme
  theme: {
    // default theme colors
    colors: {
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
      list: {
        "red": "#FF6B6B",
        "pink": "#DA77F2",
        "purple": "#9775FA",
        "blue": "#5C7CFA",
        "cyan": "#66D9E8",
        "green": "#8CE99A",
        "yellow": "#FFD43B",
        "orange": "#FF922B"
      },
      ...colors
    },
    container: {
      center: true, // alternative mx-auto
    },
    transitionDuration: {
      DEFAULT: '500ms'
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
