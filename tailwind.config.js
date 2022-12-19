/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      zIndex: {
        'neg': '-10',
      },
      colors: {
        'light-white': '#EBEBFF',
        'primary-blue': '#396DF2',
        'light-blue': '#6070FF',
        'dark-blue': '#172B4D',
        'light-dark-blue': '#344563',
        'faded-blue': '#EBEBFF',
        'light-teal': '#344563',
        'light-grey': '#C1C7D0',
        'light-grey-2': '#DFE1E6',
        'light-grey-3': '#E5E5E5',
        'light-grey-4': '#7A869A',
        'light-grey-5': '#F7F7F9',
        'medium-grey': '#7A869A',
        h2: '#7F8CFF',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'hero-shapes': "url('/img/header-shapes-mobile.png')",
      'mobile-footer-shapes':
        "url('/img/footer/contact form shapes-mobile@2x.png')",
      'desktop-header': "url('/img/desktop/Header-bg.png')",
      'contact-form-shapes':
        "url('/img/desktop/contact-form-background-shapes.png')",
    },
    fontSize: {
      small: '13px',
    },
    lineHeight: {
      11: '50px',
      12: '60px',
      10: '10px',
    },
  },
  plugins: [],
};
