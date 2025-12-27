/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'press-start': ['"Press Start 2P"', 'cursive'],
        },
        colors: {
          'mario-sky': '#5c94fc',
          'mario-hat': '#e52521',
          'mario-pipe': '#43b047',
          'brick': '#b95700',
          'mystery-box': '#ffc800',
        }
      },
    },
    plugins: [],
  }