import Heading from 'components/Heading'
import { Container } from 'components/Container'
import Menu from 'components/Menu'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Menu />

    <S.SectionInfo>
      <S.Information>
        <S.Name>Christiano Higuto</S.Name>
        <Heading size="huge">
          Front-end Developer @ <span>ClubPetro</span>
        </Heading>
      </S.Information>
    </S.SectionInfo>
  </S.Wrapper>
)

export default Main
