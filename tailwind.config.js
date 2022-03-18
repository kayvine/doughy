const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      indigo: {
        100: '#EBF4FF',
        200: '#C3DAFE',
        300: '#A3BFFA',
        400: '#7F9CF5',
        500: '#667EEA',
        600: '#5A67D8',
        700: '#4C51BF',
        800: '#434190',
        900: '#3C366B',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      display: ['"Playfair Display"', 'sans-serif'],
      body: ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        vue: '#42b983',
        cyan: '#9cdbff',
      }
    }
  },
  plugins: [],
}
