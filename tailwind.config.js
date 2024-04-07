/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      abc:["DM Serif Display","serif"],
      karla:["Karla", "sans-serif"]
    },
    colors:{
      'Dark_Violet': "hsl(256, 26%, 20%)",
      'Grayish_Blue':" hsl(216, 30%, 68%)",
      'Very_Dark_Violet':"hsl(270, 9%, 17%)",
      'Dark_Grayish_Violet': "hsl(273, 4%, 51%)",
      'Very_Light_Gray': "hsl(0, 0%, 98%)",
      'black': "black",
      'white': "white",
      'gray': "#837D88",
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

