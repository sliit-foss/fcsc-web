module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        fcsc: {
          blue: '#1c1364', // genuine fcsc blue aka blue_dark
          blue_light: '#33306f',
          orange: '#f15a24', // genuine fcsc orange aka orange_dark
          orange_light: '#f86b57',
        },
      },
      boxShadow: {
        noOffset: '0 0px 10px 0px rgba(0, 0, 0, 0.25)',
        noOffset_lighter: '0 0px 5px 0px rgba(0, 0, 0, 0.25)',
        noOffset_thicker: '0 0px 8px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['active'],
      height: ['group-hover'],
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
