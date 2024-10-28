/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet-black': '#0A0A0A',
        'charcoal-gray': '#1C1C1C',
        'dim-gray': '#4B4B4B',
        'light-gray': '#B0B0B0',
        'slate-gray': '#708090',
      },
    },
  },
  plugins: [],
}
