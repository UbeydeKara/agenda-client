// tailwind theme
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // toggling dark mode manually, use the class strategy instead of the media strategy
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [],
}
