const common = {
  grid: {
    container: {
      small: '90rem',
      medium: '110rem',
      large: '130rem'
    },
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '4.8rem'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
}

const dark = {
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
  background: '#141018',
  header: 'rgba(0, 0, 0, 0.4)',
  primary: '#892CDC',
  secondary: '#03C4A1'
}

const light = {
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
  background: '#F6F6F6',
  header: 'rgba(255, 255, 255, 0.4)',
  primary: '#6DDCCF',
  secondary: '#161D6F'
}

export default {
  ...common,
  colors: {
    dark,
    light
  }
} as const
