/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary_color":"#F4F3F0",
        "primary_button":"#D2B48C",
        "primary_text":"#331A15",
      }
    },
  },
  plugins: [require("daisyui")],
}

