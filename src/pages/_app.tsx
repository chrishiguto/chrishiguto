import 'styles/global.css'

import { AppProps } from 'next/app'
import { Karla } from 'next/font/google'
import { useEffect } from 'react';


const karla = Karla({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <main className={karla.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
