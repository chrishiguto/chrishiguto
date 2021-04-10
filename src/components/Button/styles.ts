import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    border: 0.1rem solid var(--border-color);
    border-radius: ${theme.border.radius};

    transition: border 0.2s;

    &:hover {
      border: 0.1rem solid var(--border-hover-color);
    }
  `}
`

export const Icon = styled.div`
  > svg {
    color: var(--text-color);
  }
`
