/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "lightGray": "#D8D5DB",
        "silverMetallic":"#ADACB5",
        "spaceCadet": "#2D3142",
        "customOrange": "#C75126", // this goes with white text
        "platinum": "#E8EBEC",
        
      },
      textDecorationColor: {
        "customOrange": "#C75126",
      },
    },
  },
  plugins: [],
}
