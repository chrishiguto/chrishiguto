import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  size?: 'small' | 'medium' | 'large' | 'xxxlarge' | 'huge'
}

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  xxxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
