import { render, screen } from '@testing-library/react'

import Switch from '.'

describe('<Switch />', () => {
  it('should render the heading', () => {
    const { container } = render(<Switch />)

    expect(screen.getByRole('heading', { name: /Switch/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
