import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Text from 'components/Text'

const SectionHero = () => (
  <section className="flex relative p-10">
    <Container size="large">
      <Heading size="huge">Hey! I&apos;m Christiano.</Heading>
      <div className="mt-4">
        <Text>
          I&apos;m a front-end developer, developing applications using React
          and React Native.
        </Text>
        <Text className="mt-2">
          Currently learning Rust and challenging myself to develop awesome pet
          projects!
        </Text>
      </div>
    </Container>
  </section>
)

export default SectionHero
