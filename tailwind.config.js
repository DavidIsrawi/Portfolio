module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light': "#F3F4F6",
        'dark': "#1F2937",
        'primary': "#065F46",
        'secondary': "#A7F3D0",
        'accent': "#f05d5eff"
      },
      fontFamily: {
        'main': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      transitionDuration: {
        '400': '400ms'
      }
    },
  },
  variants: {
    fill: ['hover'],
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
  plugins: [],
}
