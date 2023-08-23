// tailwind theme
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
