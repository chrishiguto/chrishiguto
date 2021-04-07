import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: 8px 16px;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;

    transition: border 0.2s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `}
`

export const Icon = styled.div`
  > svg {
    color: #fff;
  }
`
