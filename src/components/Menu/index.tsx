import { Sun } from '@styled-icons/feather/Sun'
import { Moon } from '@styled-icons/feather/Moon'

import { useTheme } from 'hooks/theme'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Switch from 'components/Switch'

import * as S from './styles'

const Menu = () => {
  const { setUserTheme, userTheme } = useTheme()

  const handleSwitch = () => {
    setUserTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Menu>
          <Heading size="large">ch.</Heading>
          <Switch
            activeIcon={<Moon size={16} strokeWidth={2} />}
            inactiveIcon={<Sun size={16} strokeWidth={2} />}
            checked={userTheme === 'light'}
            handleClick={handleSwitch}
          />
        </S.Menu>
      </Container>
    </S.Wrapper>
  )
}

export default Menu
