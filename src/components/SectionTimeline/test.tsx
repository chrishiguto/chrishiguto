import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu" />
    }
  }
})

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />)

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByText(/christiano higuto/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /front-end developer @ clubpetro/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })
})
