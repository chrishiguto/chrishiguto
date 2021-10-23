import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  ReactNode
} from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type ThemeContextData = {
  toggleTheme: () => void
  userTheme: ThemeProps | undefined
}

export type ThemeProps = 'dark' | 'light'

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [userTheme, setTheme] = useState<ThemeProps | undefined>()

  const toggleTheme = useCallback(() => {
    setTheme((prevState: ThemeProps | undefined) => {
      const root = window.document.documentElement

      const newState = prevState === 'dark' ? 'light' : 'dark'

      Object.entries(theme.colors[newState]).forEach(([name, color]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, color)
      })

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
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
