/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        'hscreen-1/2':'50vh',
        'wscreen-1/2':'50vw',
      }
    },
  },
  plugins: [],
}

