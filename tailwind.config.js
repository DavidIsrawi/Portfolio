module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    fill: ['hover'],
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover']
    },
  },
  plugins: [],
}
