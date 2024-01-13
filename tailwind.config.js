/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        'hscreen-1/2':'50vh',
        'hscreen-2/3':'80vh',
        'wscreen-1/2':'50vw',
      }
    },
  },
  plugins: [],
}

