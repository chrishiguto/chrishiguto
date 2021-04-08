const common = {
  grid: {
    container: '130rem',
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
  ...common,
  colors: {
    border: 'rgba(255, 255, 255, 0.4)',
    borderHover: 'rgba(255, 255, 255, 0.2)',
    mainBg: '#1d1d1d',
    mainText: '#F2F2F2',
    white: '#FAFAFA',
    black: '#1d1d1d',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#333333'
  }
}

const light = {
  ...common,
  colors: {
    border: 'rgba(0, 0, 0, 0.4)',
    borderHover: 'rgba(0, 0, 0, 0.2)',
    mainBg: '#F2F2F2',
    mainText: '#1d1d1d',
    white: '#FAFAFA',
    black: '#1d1d1d',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#333333'
  }
}

export default {
  dark,
  light
} as const
