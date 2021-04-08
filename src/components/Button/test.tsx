import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Github } from '@styled-icons/feather/Github'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>Button label</Button>)

    expect(
      screen.getByRole('button', { name: /button label/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<Github aria-label="Button icon" />}>Button label</Button>
    )

    expect(screen.getByLabelText(/button icon/i)).toBeInTheDocument()
  })
})
