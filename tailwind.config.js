/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ganyu-bg': "url('../img/standard-bg.jpg')"
      },
      backgroundSize: {
        'ganyu-bg': "cover"
      },
      backgroundPosition: {
        'ganyu-bg': "center"
      }
    },
  },
  plugins: [],
}

