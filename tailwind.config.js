/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#6070FF',
        'dark-blue': '#172B4D',
        'light-teal': '#344563',
        h2: '#7F8CFF',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'hero-shapes': "url('/src/img/header-shapes-mobile.png')",
    },
    fontSize: {
      40: '40px',
    },
    lineHeight: {
      11: '50px',
      12: '60px',
      10:'10px'
    },
  },
  plugins: [],
};
