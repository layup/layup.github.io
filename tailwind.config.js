/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    scale: {
      '10': '.10', 
     '25': '.25',
    },
    extend: {
      backgroundImage: {
        'split-white-grey': "linear-gradient(to bottom, white 60% , #E2E8F0 40%);"
      }
    },
  },
  plugins: [],
}
