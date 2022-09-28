/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage:{
        fundo: "url('/bg1.png')"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
