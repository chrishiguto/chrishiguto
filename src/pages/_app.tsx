import 'styles/global.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'hooks/theme/theme'

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
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500&family=Young+Serif&display=swap&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
