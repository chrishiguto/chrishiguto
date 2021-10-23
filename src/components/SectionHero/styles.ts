import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    padding: ${theme.spacings.large};
  `}
`
