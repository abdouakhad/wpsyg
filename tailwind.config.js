const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Inter'],
      },
      colors: {
        beize: '#3E3E3E',
        vert: '#34D399',
        pink: '#715ba5',
        white: '#ffffff',
        noir: '#000000',
      },
    },
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
