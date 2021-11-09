import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    padding: ${theme.spacings.large};
  `}
`

export const Link = styled.a`
  text-decoration: none;
  border-bottom: 1px solid var(--color-yellow);
`
