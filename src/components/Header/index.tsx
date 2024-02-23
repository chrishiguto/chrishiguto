import { Container } from 'components/Container'
import ThemeSwitcher from 'components/ThemeSwitcher'

const Header = () => {
  return (
    <header className="sticky flex items-center h-20 top-0 z-50 backdrop-blur-sm">
      <Container>
        <div className="flex justify-between">
          <nav>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}

export default Header
