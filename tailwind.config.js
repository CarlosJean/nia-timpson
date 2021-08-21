module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          dark:'#363636',
          normal:'#868686'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
