module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      orange: '#F15A24',
      blue_fcsc: '#1c1364',
    }),
    colors: {
      white: '#ffffff',
      green: '#18db4d',
      orange: {
        light: '#fd5d3f',
        dark: '#F15A24'
      },
      blue: {
        fcsc: '#1c1364'
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      gradientColorStops: ['active'],
      height: ['group-hover'],
    },
  },
  plugins: [],
}
