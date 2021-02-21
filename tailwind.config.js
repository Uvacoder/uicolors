const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      purple: colors.purple
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
