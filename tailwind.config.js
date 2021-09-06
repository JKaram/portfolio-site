const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/ *.{ js, ts, jsx, tsx }'],
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
    extend: {
      backgroundImage: theme => ({
        'example': "url('https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80')",

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
