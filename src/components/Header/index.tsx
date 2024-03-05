import { Container } from 'components/Container'
import ThemeSwitcher from 'components/ThemeSwitcher'

const Header = () => {
  return (
    <header className="sticky flex items-center h-20 top-0 z-50 backdrop-blur-sm">
      <Container>
        <div className="flex">
          <nav className="flex w-full">
            <ul className="flex w-full justify-center space-x-8">
              <li className="text-white text-xl uppercase">Home</li>
              <li className="text-white text-xl uppercase">Blog</li>
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}

export default Header
