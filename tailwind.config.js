/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#071007',
          900: '#0c1b0c',
          800: '#132a13',
          700: '#1e3d1e',
          600: '#31572c',
          500: '#4f772d',
          400: '#709744',
          300: '#90a955',
          200: '#b8c98e',
          100: '#e1e9cc',
          50: '#f4f7ed',
        },
        wetland: {
          900: '#0b2434',
          800: '#13354b',
          700: '#1b4965',
          600: '#2b6589',
          500: '#4082aa',
          400: '#62a3cc',
          300: '#90e0ef',
          200: '#c2f0f8',
          100: '#e5f8fc',
        },
        amberGold: {
          600: '#c77800',
          500: '#ec9a29',
          400: '#f5b041',
          300: '#fad7a0',
          200: '#fdebd0',
        },
        earth: {
          900: '#27170e',
          800: '#3e2723',
          700: '#5d4037',
          600: '#795548',
          500: '#8d6e63',
          100: '#efebe9',
        },
        parchment: {
          50: '#fdfbf7',
          100: '#f9f6ef',
          200: '#f3ece0',
          300: '#e9decb',
          800: '#4a3f35',
          900: '#2e251e',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Merriweather', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'natural': '0 10px 30px -5px rgba(12, 27, 12, 0.4)',
        'glow': '0 0 25px rgba(236, 154, 41, 0.35)',
        'glow-green': '0 0 25px rgba(79, 119, 45, 0.4)',
      }
    },
  },
  plugins: [],
}
