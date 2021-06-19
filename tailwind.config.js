module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
       ...theme('colors'),
       'orange': '#F15A24',
      })
    extend: {},
  },
  variants: {
    extend: {
      gradientColorStops: ['active'],
    },
  },
  plugins: [],
}
