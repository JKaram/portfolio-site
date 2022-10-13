const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Roboto'],
      'roboto': ['Roboto'],
      'nunito': ['Nunito'],
      'amatic': ['Amatic SC']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        DEFAULT: '#eceff1',
      },
      black: {
        DEFAULT: "#303030"
      },
      linkedIn: {
        DEFAULT: "#0e76a8"
      },
      ...colors
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
