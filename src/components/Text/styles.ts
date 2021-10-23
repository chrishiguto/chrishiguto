import styled, { css } from 'styled-components'

export const Wrapper = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 2;

    & + & {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
