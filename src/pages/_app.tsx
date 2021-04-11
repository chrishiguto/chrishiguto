import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'hooks/theme/theme'

import theme from 'styles/theme'

import GlobalStyles from 'styles/global'

const themeScript = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const isBrowser = () => typeof window !== 'undefined'

    if (isBrowser()) {
      const persistedColorPreference = window.localStorage.getItem('theme')

      if (persistedColorPreference) {
        return persistedColorPreference
      }

      const mql = window.matchMedia('(prefers-color-scheme: dark)')

      if (mql.matches) {
        return mql.matches ? 'dark' : 'light'
      }
    }

    return 'dark'
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty(
    '--text-color',
    colorMode === 'light'
      ? '${theme.light.colors.mainText}'
      : '${theme.dark.colors.mainText}'
  );
  root.style.setProperty(
    '--background-color',
    colorMode === 'light'
      ? '${theme.light.colors.mainBg}'
      : '${theme.dark.colors.mainBg}'
  );
  root.style.setProperty(
    '--border-color',
    colorMode === 'light'
      ? '${theme.light.colors.border}'
      : '${theme.dark.colors.border}'
  );
  root.style.setProperty(
    '--border-hover-color',
    colorMode === 'light'
      ? '${theme.light.colors.borderHover}'
      : '${theme.dark.colors.borderHover}'
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()`
  // eslint-disable-next-line react/no-danger
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
        {themeScript()}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
