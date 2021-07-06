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
        light: '#feb6a8',
        dark: '#fd5d3f',
        dark_lightShade: '#ff6d52',
      },
      blue:{
        dark:'#302d63',
        dark_lightShade:'#3d3a75',
      },
      gray:{
        light:'#e9e8f0',
        dark:'#3b3b3b',
      }
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      noOffset: '0 0px 10px 0px rgba(0, 0, 0, 0.25)',
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
