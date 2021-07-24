
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm1': '340px',
      'sm2': '460px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        white: '#ffffff',
        fcsc: {
          blue: '#1c1364', // genuine fcsc blue aka blue_dark
          blue_light: '#33306f',
          orange: '#f15a24', // genuine fcsc orange aka orange_dark
          orange_light: '#feb6a8',
        },
      },
      boxShadow: {
        noOffset: '0 0px 10px 0px rgba(0, 0, 0, 0.25)',
        noOffset_lighter: '0 0px 5px 0px rgba(0, 0, 0, 0.25)',
        noOffset_thicker: '0 0px 6px 3px rgba(0, 0, 0, 0.25)',
      },
      aspectRatio: {
        1.25: '1.25',
        1.5: '1.5',
        2.5: '2.5',
        3.5: '3.5',
        4.5: '4.5',
        5.5: '5.5',
      }, 
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['active'],
      height: ['group-hover'],
      brightness: ['hover'],
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),require('@tailwindcss/aspect-ratio')],
}
