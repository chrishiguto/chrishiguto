import { Container } from 'components/Container'
import Emphasis from 'components/Emphasis'
import Text from 'components/Text'
import * as S from './styles'

const SectionHero = () => (
  <S.Wrapper>
    <Container size="small">
      <Text>Oi,</Text>
      <Text>
        Meu nome é Christiano, seja bem-vindo ao meu blog. Amo desenvolver e sou
        entusiasta do mundo do empreendedorismo, acredito na força interna de
        cada ser humano para realização de sonhos.
      </Text>
      <Text>
        Atualmente atuo como desenvolvedor front end na{' '}
        <Emphasis>Kenlo.io</Emphasis> há aproximadamente 3 meses.
      </Text>
    </Container>
  </S.Wrapper>
)

export default SectionHero
