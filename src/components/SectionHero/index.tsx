import { Container } from 'components/Container'
import Emphasis from 'components/Emphasis'
import Heading from 'components/Heading'
import Text from 'components/Text'

const SectionHero = () => (
  <section className="flex relative p-10">
    <Container size="large">
      <Heading size="huge">Hey! I&apos;m Christiano.</Heading>
      <Text>
        Meu nome é Christiano, seja bem-vindo ao meu site. Atuo como React
        Developer no{' '}
        <a
          href="https://www.bees.com/"
          target="_blank"
          className="no-underline border-b border-yellow-300"
          rel="noreferrer"
        >
          <Emphasis>BEES</Emphasis>
        </a>
        , uma célula tech que cria soluções para à operação da Ambev e AB InBev
        :)
      </Text>
    </Container>
  </section>
)

export default SectionHero
