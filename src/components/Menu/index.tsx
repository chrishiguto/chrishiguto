import { Sun } from '@styled-icons/feather/Sun'
import { Moon } from '@styled-icons/feather/Moon'

import { useTheme, ThemeProps } from 'hooks/theme'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Switch from 'components/Switch'

import * as S from './styles'

const Menu = () => {
  const { toggleTheme, userTheme } = useTheme()

  return (
    <S.Wrapper>
      <Container>
        <S.Menu>
          <Heading size="large">ch.</Heading>
          {!!userTheme && (
            <Switch
              activeIcon={<Moon size={16} strokeWidth={2} />}
              inactiveIcon={<Sun size={16} strokeWidth={2} />}
              checked={userTheme === 'light'}
              handleClick={toggleTheme}
            />
          )}
        </S.Menu>
      </Container>
    </S.Wrapper>
  )
}

export default Menu
