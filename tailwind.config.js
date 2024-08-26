/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#23293C',
        'custom-blue': '#2D3349',
        'custom-light-blue': '#818BA3',
        'custom-input-bg': '#3E4157',
        'custom-button-bg': '#6E49FF',
        'custom-button-hover': '#5b3bcc',

        'primary-1': '#CB3CFF',

        'secondary-1': '#0B1739',
        'secondary-2': '#343B4F',
        'secondary-3': '#57C3FF',
        'secondary-4': '#9A91FB',
        'secondary-5': '#FDB52A',

        'neutral-1': '#081028',
        'neutral-2': '#212C4D',
        'neutral-3': '#37446B',
        'neutral-4': '#7E89AC',
        'neutral-5': '#AEB9E1',
        'neutral-6': '#D1DBF9',
        'neutral-7': '#D9E1FA',
        'neutral-8': '#FFFFFF',

        'custom-1': '#F4F6FA',
        'custom-2': '#3872D4',
        'custom-3': '#989BA5',
        'custom-4': '#262626',
        'custom-5': '#323232',
        'custom-6': '#444444',
        'custom-7': '#888888',
        'custom-8': '#282828',
        'custom-edit': '#CFC03B',
        'custom-delete': '#CA0000',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        velaSans: ['VelaSans', 'sans-serif']
      }
    },
  },
  plugins: [],
}