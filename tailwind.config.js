/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#4FD1C5',
          600: '#38B2AC',
          700: '#2C7A7B',
        },
        'secondary': {
          500: '#4299E1',
          600: '#3182CE',
          700: '#2B6CB0',
        }
      },
    },
  },
  plugins: [],
}
