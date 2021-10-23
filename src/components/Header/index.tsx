import { useTheme } from 'hooks/theme/theme'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ThemeSwitcher from 'components/ThemeSwitcher'

import * as S from './styles'

const Header = () => {
  const { userTheme } = useTheme()

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Heading size="large">ch.</Heading>
          {!!userTheme && <ThemeSwitcher />}
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Header
