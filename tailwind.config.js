// tailwind theme
const defaultTheme = require('tailwindcss/defaultTheme')

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
