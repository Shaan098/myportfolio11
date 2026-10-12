/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#F4EBDD',
        accent:   '#D94F2B',
        secondary:'#F2C14E',
      },
      fontFamily: {
        syne:  ['Bodoni Moda', 'serif'],
        dm:    ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'blink':     'blink 1s step-end infinite',
      }
    },
  },
  plugins: [],
}
