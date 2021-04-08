import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as ButtonStyles from 'components/Button/styles'
import { Container } from 'components/Container'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    width: 100%;
    height: 100%;

    transition: background-color 0.3s;
  `}
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Name = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    opacity: 0.5;
  `}
`

const Section = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Information = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-top: 1.6rem;
      > span {
        color: #f26600;
      }

      ${media.greaterThan('medium')`
        ${HeadingStyles.wrapperModifiers.huge(theme)}
      `}
    }
  `}
`

export const About = styled(Section)`
  ${Information} {
    margin-bottom: 4rem;
  }
`

export const Footer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    height: 12rem;
    padding: 3.2rem 0;

    ${media.greaterThan('medium')`
      height: 16rem;
    `}
  `}
`

export const Email = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${ButtonStyles.Wrapper} + ${ButtonStyles.Wrapper} {
    margin-left: 0.8rem;
  }
`
