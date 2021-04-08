/* eslint-disable prettier/prettier */
import theme from 'styles/theme'

type Theme = typeof theme.dark

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}
