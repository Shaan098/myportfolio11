/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#080B14',
        accent:   '#00F5FF',
        secondary:'#1A2F4B',
      },
      fontFamily: {
        syne:  ['Syne', 'sans-serif'],
        dm:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'blink':     'blink 1s step-end infinite',
      }
    },
  },
  plugins: [],
}
