import React, { createContext, useState, useCallback, useContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type ThemeContextData = {
  setUserTheme: (theme: ThemeProps) => void
  userTheme: 'dark' | 'light'
}

type ThemeProps = 'dark' | 'light'

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [userTheme, setTheme] = useState<ThemeProps>(() => {
    let selectedTheme: ThemeProps = 'dark'

    if (typeof window !== 'undefined') {
      selectedTheme = window.localStorage.getItem('theme') as ThemeProps
    }

    return selectedTheme
  })

  const setUserTheme = useCallback((theme: ThemeProps) => {
    setTheme(theme)
  }, [])

  return (
    <ThemeContext.Provider value={{ userTheme, setUserTheme }}>
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
