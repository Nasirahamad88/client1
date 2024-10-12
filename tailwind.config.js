/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7361df', 
        'orange':'#f4533e',
      },
    },
  },
  plugins: [require('daisyui')],
}
