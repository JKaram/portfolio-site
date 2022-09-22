const colors = require('tailwindcss/colors')
module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/ *.{ js, ts, jsx, tsx }'],
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
      typescript: {
        DEFAULT: "#2f74c0"
      },
      ...colors
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
