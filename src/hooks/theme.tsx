import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useLayoutEffect
} from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type ThemeContextData = {
  toggleTheme: () => void
  userTheme: ThemeProps
}

export type ThemeProps = 'dark' | 'light'

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const getInitialColorMode: any = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const persistedColorPreference = window.localStorage.getItem('theme')

  if (persistedColorPreference) {
    console.log('eu possuo cor preferida')
    return persistedColorPreference
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')

  if (mql.matches) {
    return mql.matches ? 'dark' : 'light'
  }
}

const ThemeProvider: React.FC = ({ children }) => {
  const [userTheme, setTheme] = useState<ThemeProps>('light')

  const toggleTheme = useCallback(() => {
    setTheme((prevState: ThemeProps) => {
      const newState = prevState === 'dark' ? 'light' : 'dark'

      window.localStorage.setItem('theme', newState)
      return newState
    })
  }, [])

  useLayoutEffect(() => {
    setTheme(getInitialColorMode())
  }, [userTheme])

  return (
    <ThemeContext.Provider value={{ userTheme, toggleTheme }}>
      <SCThemeProvider theme={userTheme === 'dark' ? theme.dark : theme.light}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('Must be used within a ThemeProvider component')
  }

  return context
}

export { ThemeProvider, useTheme }
