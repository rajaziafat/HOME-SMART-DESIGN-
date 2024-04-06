/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '1022px', // Define custom screen size 'ms' at 1022px
      },
    },
  },
  plugins: [],
}
