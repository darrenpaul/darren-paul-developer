/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "crayola-yellow-100": "#FFD76Fff",
        "celeste": "#B3ECE8ff",
        "golden-orange": "#BA4530ff",
        "night-100": "#30323D",
        "night-200": "#4E5061",
        "night-300": "#E8C447",
        "night-400": "#EDF6F9"
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
        monoton: ['Monoton', 'cursive'],
        zenDots: ['Zen Dots', 'cursive']
      },
    },
  },
  plugins: [],
};
