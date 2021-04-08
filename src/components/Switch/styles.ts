import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    outline: none;
    border: none;

    width: 4.4rem;
    height: 2.4rem;
    background-color: ${theme.colors.gray};
    border-radius: 2.2rem;
  `}
`

type CircleProps = {
  checked: boolean
}

const circleModifiers = {
  checked: () => css`
    transform: translateX(2.2rem);
  `
}

export const Circle = styled.div<CircleProps>`
  ${({ theme, checked }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;
    background-color: ${theme.colors.white};
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;

    ${checked && circleModifiers.checked()}
  `}
`
