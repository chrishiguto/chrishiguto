import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect
} from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type ThemeContextData = {
  toggleTheme: () => void
  userTheme: ThemeProps
}

export type ThemeProps = 'dark' | 'light'

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [userTheme, setTheme] = useState<ThemeProps | undefined>()

  const toggleTheme = useCallback(() => {
    setTheme((prevState: ThemeProps | undefined) => {
      const root = window.document.documentElement

      const newState = prevState === 'dark' ? 'light' : 'dark'

      root.style.setProperty(
        '--text-color',
        newState === 'light'
          ? theme.light.colors.mainText
          : theme.dark.colors.mainText
      )
      root.style.setProperty(
        '--background-color',
        newState === 'light'
          ? theme.light.colors.mainBg
          : theme.dark.colors.mainBg
      )
      root.style.setProperty(
        '--border-color',
        newState === 'light'
          ? theme.light.colors.border
          : theme.dark.colors.border
      )
      root.style.setProperty(
        '--border-hover-color',
        newState === 'light'
          ? theme.light.colors.borderHover
          : theme.dark.colors.borderHover
      )

      window.localStorage.setItem('theme', newState)

      return newState
    })
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    const initialColorValue: ThemeProps = root.style.getPropertyValue(
      '--initial-color-mode'
    ) as ThemeProps

    setTheme(initialColorValue)
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
