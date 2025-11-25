/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-80px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      colors: {
        'primary': '#111723',
        'bordercolor': '#414A5A',
      }
    },
  },
  plugins: [],
}

