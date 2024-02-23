/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['Karla'],
      young:
        "'Young Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    extend: {
      colors: {
        neutral: '#FBFCFF',
        neutral5: '#E7E9EC',
        neutral15: '#D3D5DA',
        neutral20: '#BFC2C7',
        neutral50: '#ABAEB4',
        neutral60: '#979BA2',
        neutral70: '#5B6169',
        neutral80: '#515760',
        neutral90: '#3D444D',
        neutral100: '#333A44',
        white: '#FAFAFA',
        text: '#1B262C',
        'text-dark': '#F7F7F7',
        background: '#F6F6F6',
        header: 'rgba(255, 255, 255, 0.4)',
        primary: '#6DDCCF',
        secondary: '#161D6F',
        darkMode: {
          neutral: '#333A44',
          neutral5: '#3D444D',
          neutral15: '#515760',
          neutral20: '#5B6169',
          neutral50: '#979BA2',
          neutral60: '#ABAEB4',
          neutral70: '#BFC2C7',
          neutral80: '#D3D5DA',
          neutral90: '#E7E9EC',
          neutral100: '#FBFCFF',
          white: '#FAFAFA',
          text: '#F7F7F7',
          background: '#010101',
          header: 'rgba(0, 0, 0, 0.4)',
          primary: '#892CDC'
        }
      }
    }
  },
  plugins: []
}
