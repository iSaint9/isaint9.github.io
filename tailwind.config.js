/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ramlethal-bg': "url('../img/ramlethal-bg.jpg')"
      },
      backgroundSize: {
        'ramlethal-bg': "cover"
      },
      backgroundPosition: {
        'ramlethal-bg': "center"
      },
      colors: {
        'standard': colors.green
      }
    },
  },
  plugins: [],
}

