/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ["Nunito", "sans-serif"],
        'PermanentMarker': ["Permanent Marker", "cursive"],
        'JosefinSans': ["Josefin Sans", "sans-serif"]
      },
      colors: {
        'sopify-color': '#79B259',
        'mycolor': 'rgb(32, 39, 44 )'
      },
    },
  },
  plugins: [],
}
