/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'navy': '#1A2A39',
      'mustard': '#A78E3C',
      'black': '#000000',
      'gray': '#EEEEEE',
      'darkerGray': '#D4D3D3',
      'lighterGray':'#FFFAFA'
    },
    
  },
  plugins: [],
}