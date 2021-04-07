import { Github } from '@styled-icons/feather/Github'
import { Linkedin } from '@styled-icons/feather/Linkedin'
import { Twitter } from '@styled-icons/feather/Twitter'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Menu from 'components/Menu'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Menu />

    <S.Content>
      <S.About>
        <S.Information>
          <S.Name>Christiano Higuto</S.Name>
          <Heading size="xxxlarge">
            Front-end Developer @ <span>ClubPetro</span>
          </Heading>
        </S.Information>
        <S.SocialMedia>
          <Button icon={<Github size={24} />} />
          <Button icon={<Linkedin size={24} />} />
          <Button icon={<Twitter size={24} />} />
        </S.SocialMedia>
      </S.About>

      <S.Footer>
        <Container>
          <Heading size="small">chrisshiguto@gmail.com</Heading>
        </Container>
      </S.Footer>
    </S.Content>
  </S.Wrapper>
)

export default Main
