/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      "bg" : "#F1F0E8",
      "headers":"#688990",
      "light-text":"#B3C8CF",
      "white": "#ffffff",
      "transparent":"transparent",
      "blur":"rgba(0,0,0,0.4)"
    },
    fontFamily: {
      primary : ["Keania One","serif"],
      secondary : ["Itim","serif"],
      logo : ["Kablammo","serif"]
    },
    extend: {
      dropShadow: {
        'nav': '0px 5px 15px rgba(0,0,0,0.3) ', 
        'main' : '0 0 15px rgba(0,0,0,0.3)'
      },
    },
  },
  plugins: [],
}

