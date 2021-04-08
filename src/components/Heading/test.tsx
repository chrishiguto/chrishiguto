import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a small heading by default', () => {
    const { container } = renderWithTheme(<Heading>Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
      }

      <h2
        class="c0"
      >
        Heading
      </h2>
    `)
  })

  it('should render a medium heading', () => {
    renderWithTheme(<Heading size="medium">Heading</Heading>)

    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      fontSize: '1.6rem'
    })
  })

  it('should render a large heading', () => {
    renderWithTheme(<Heading size="large">Heading</Heading>)

    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      fontSize: '1.8rem'
    })
  })

  it('should render a xlarge heading', () => {
    renderWithTheme(<Heading size="xlarge">Heading</Heading>)

    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      fontSize: 'calc(1.8rem * 2)'
    })
  })

  it('should render a huge heading', () => {
    renderWithTheme(<Heading size="huge">Heading</Heading>)

    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      fontSize: '4.8rem'
    })
  })
})
