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
        '15': '10%',
        '85': '85%',
        '90': '90%',
        '445': '445px',
        '195': '170px',
        '420': '420px',
        '480': '480px',
        '500': '500px',
        '313': '310px',
        '309': '309px',
      },
      height: {
        '90': '90vh',
        '445': '445px',
        '195': '170px',
        '327': '327px',
        '431': '425px',
        '200': '200px',
      },
      spacing: {
        '20-a': '90%'
      },
      boxShadow: {
        'a-shadow': '2px 2px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
