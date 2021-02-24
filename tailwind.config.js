const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({

         'hero-pattern': "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')",

        'footer-texture': "url('/img/footer-texture.png')",
      
        })
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      violet: colors.violet,
      lime: colors.lime
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
