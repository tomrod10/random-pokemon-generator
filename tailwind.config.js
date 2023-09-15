/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');

module.exports = {
  mode: 'jit',
  content: ["./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ['postcss-preset-env',
  tailwindcss],
}

