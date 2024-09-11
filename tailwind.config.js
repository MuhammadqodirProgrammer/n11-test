/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {

      colors: {
        'mainColor': 'white',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        velaSans: ['VelaSans', 'sans-serif']
      }
    },
  },
  plugins: [],
}