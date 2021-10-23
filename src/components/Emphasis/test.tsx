import { render, screen } from '@testing-library/react'

import Emphasis from '.'

describe('<Emphasis />', () => {
  it('should render the heading', () => {
    const { container } = render(<Emphasis />)

    expect(screen.getByRole('heading', { name: /Emphasis/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
