import { ThemeProvider } from 'hooks/theme/theme'
import { render, RenderResult } from '@testing-library/react'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>)
