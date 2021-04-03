import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    opacity: 0.5;
  `}
`

export const SectionInfo = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Information = styled.div`
  margin-top: -18rem;

  ${HeadingStyles.Wrapper} {
    margin-top: 0.8rem;
    > span {
      color: #f26600;
    }
  }
`
