/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#111723',
        'secondary': '#1130A6',
        'bordercolor': '#414A5A',
      }
    },
  },
  plugins: [],
}

