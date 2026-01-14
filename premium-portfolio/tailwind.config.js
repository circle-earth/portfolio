/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0E',
        foreground: '#EDEDED',
        muted: '#9CA3AF',
        accent: '#6366F1',
      },
    },
  },
  plugins: [],
}