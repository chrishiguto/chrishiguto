import styled, { css, DefaultTheme } from 'styled-components'

type ContainerProps = {
  size?: 'small' | 'medium' | 'large'
}

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    max-width: ${theme.grid.container.small};
  `,

  medium: (theme: DefaultTheme) => css`
    max-width: ${theme.grid.container.medium};
  `,

  large: (theme: DefaultTheme) => css`
    max-width: ${theme.grid.container.large};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, size = 'large' }) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    ${!!size && containerModifiers[size](theme)};
  `}
`
