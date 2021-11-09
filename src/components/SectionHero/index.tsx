import { Container } from 'components/Container'
import Emphasis from 'components/Emphasis'
import Text from 'components/Text'
import * as S from './styles'

const SectionHero = () => (
  <S.Wrapper>
    <Container size="small">
      <Text>Oi,</Text>
      <Text>
        Meu nome é Christiano, seja bem-vindo ao meu site. Atuo como React
        Developer no{' '}
        <S.Link href="https://www.bees.com/" target="_blank">
          <Emphasis>BEES</Emphasis>
        </S.Link>
        , uma célula tech que cria soluções para à operação da Ambev e AB InBev
        :)
      </Text>
      <Text>
        Irei utilizar esse espaço para compartilhar conhecimentos, contar um
        pouco sobre meu caminho até aqui e continuar aprendendo...
      </Text>
      <Text>Em breve terá muito conteúdo por aqui!</Text>
    </Container>
  </S.Wrapper>
)

export default SectionHero
