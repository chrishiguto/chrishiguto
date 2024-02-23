import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  ReactNode
} from 'react'

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

      window.localStorage.setItem('theme', newState)

      if (prevState === 'light') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }

      return newState
    })
  }, [])

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
    <ThemeContext.Provider value={{ userTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
