/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#ff1200',
          600: '#ff2a1a',
          700: '#ff4133',
        },
      },
    },
  },
  plugins: [],
}