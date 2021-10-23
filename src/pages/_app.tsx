import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'hooks/theme/theme'

import theme from 'styles/theme'

import GlobalStyles from 'styles/global'

type ThemeProps = typeof theme

function setColorsByTheme() {
  const colors: ThemeProps = {} as ThemeProps
  const isBrowser = typeof window !== 'undefined'

  let colorMode = 'dark'

  if (isBrowser) {
    const persistedColorPreference = window.localStorage.getItem('theme')
    const mql = window.matchMedia('(prefers-color-scheme: dark)')

    if (mql.matches) {
      colorMode = mql.matches ? 'dark' : 'light'
    }

    console.log(persistedColorPreference)

    if (persistedColorPreference) {
      colorMode = persistedColorPreference
    }
  }

  const root = document.documentElement

  root.style.setProperty('--initial-color-mode', colorMode)

  Object.entries(colors[colorMode as keyof typeof theme]).forEach((item) => {
    const cssVarName = `--color-${item[0]}`

    root.style.setProperty(cssVarName, item[1])
  })
}

const scriptTag = () => {
  const boundFn = String(setColorsByTheme).replace(
    '{}',
    JSON.stringify(theme.colors)
  )

  const codeToRunOnClient = `(${boundFn})()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Home | Christiano Higuto</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
        ></meta>
        <meta
          name="description"
          content="Welcome! This is my website - Christiano Higuto."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;500&display=swap"
          rel="stylesheet"
        />
        {scriptTag()}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
