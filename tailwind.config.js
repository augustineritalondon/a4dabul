/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#675D8C',
        'banner': '#F8F6F9',
        'borderColor': '#9B9B9B',
        'secondary': '#C6B8D9',
        'lightBanner': '#F8F6F9',
        'lightPrimary': '#F3EDFB'
      },
      fontFamily:{
        'Montserrat': ['Montserrat'],
        'Montserrat-Regular': ['Montserrat-Regular'],
        'Lato': ['Lato'],
        'Mulish': ['Mulish'],
      },
      fontSize:{
        '22': '22px',
      },
      width: {
        '5': '5%',
        '15': '10%',
        '30': '30%',
        '85': '85%',
        '90': '90%',
        '445': '445px',
        '195': '170px',
        '420': '420px',
        '480': '480px',
        '500': '500px',
        '313': '310px',
        '309': '309px',
        '432': '432px'
      },
      height: {
        '90': '90vh',
        '50': '53vh',
        '80': '80vh',
        '445': '445px',
        '195': '170px',
        '327': '327px',
        '431': '425px',
        '200': '200px',
        '366': '300px'
      },
      spacing: {
        '20-a': '90%',
        '10-a': '0.1%'
      },
      boxShadow: {
        'a-shadow': '2px 2px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
