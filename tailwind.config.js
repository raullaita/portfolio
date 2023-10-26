/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      font1: 'Rock Salt',
      font2: 'Agbalumo',
      font3: 'Titillium Web'
    },
    container: {
    },
    extend: {
      colors: {
        color1: '#16A34A',
        color2: '#151515',
        color3: '#606060',
        color4: '#FF0000',
        color5: '#FFFFFF',
        color6: '#C9C9C9',
        color7: '#FF0000',
        color8: '#FF0000'
      }
    }
  },
  plugins: []
}
