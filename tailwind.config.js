/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html"],
  theme: {
    colors: {
      'forestGreen': '#446041',
      'lightGreen': '#5C715A',
      'greenGrey': '#6E7D73',
    },
    fontFamily: {
      title : ['Roboto'],
      nav :['Roboto Mono'],
      body :['Roboto Serif']
    },
    gridTemplateRows: {
      'aboutGrid': '45vh 45vh',
    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

