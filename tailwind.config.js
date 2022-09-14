const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ...colors,
        background: '#181829',
        popup: '#222232',
        primaryText : '#FFFFFF',
        secondary : '246BFD'
      }
    },
  },
  plugins: [
      require("@tailwindcss/forms")
  ],
}
