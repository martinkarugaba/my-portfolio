/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#6070FF',
        'dark-blue': '#172B4D',
      },
    },
    fontFamily:{
      poppins:['Poppins','sans-serif']
    }
  },
  plugins: [],
};
