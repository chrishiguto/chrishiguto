import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Switch from '.'

const props = {
  checked: true,
  handleClick: jest.fn()
}

const fakeIcon = <div data-testid="Fake icon" />

describe('<Switch />', () => {
  it('should render the switch', () => {
    const { container } = renderWithTheme(<Switch {...props} />)

    expect(screen.getByLabelText(/switch button/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the switch with active icon if its checked', () => {
    renderWithTheme(<Switch {...props} activeIcon={fakeIcon} />)

    expect(screen.getByTestId(/fake icon/i)).toBeInTheDocument()
  })

  it('should render the switch with inactive icon if its not checked', () => {
    renderWithTheme(
      <Switch {...props} inactiveIcon={fakeIcon} checked={false} />
    )

    expect(screen.getByTestId(/fake icon/i)).toBeInTheDocument()
  })
})
