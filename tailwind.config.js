const colors = require('tailwindcss/colors')
module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/ *.{ js, ts, jsx, tsx }'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Roboto'],
      'roboto': ['Roboto'],
      'nunito': ['Nunito']
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
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
