import React, { createContext, useState, useCallback, useContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type ThemeContextData = {
  toggleTheme: () => void
  userTheme: ThemeProps
}

export type ThemeProps = 'dark' | 'light'

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [userTheme, setTheme] = useState<ThemeProps>(() => {
    let selectedTheme: ThemeProps = 'dark'

    if (typeof window !== 'undefined') {
      selectedTheme = window.localStorage.getItem('theme') as ThemeProps
    }

    return selectedTheme
  })

  const toggleTheme = useCallback(() => {
    setTheme((prevState: ThemeProps) =>
      prevState === 'dark' ? 'light' : 'dark'
    )
  }, [])

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
