/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,ejs}",
  "./views/*/*.{html,js,ejs}"],
  theme: {
    extend: {fontFamily: {
      'amatic': ['Amatic SC', 'cursive'],
      'raleway': ['Raleway', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    },
  },
  },
  plugins: [],
}