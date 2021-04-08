import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(
      <Container>
        <h2>Container children</h2>
      </Container>
    )

    expect(
      screen.getByRole('heading', { name: /container children/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <h2>
          Container children
        </h2>
      </div>
    `)
  })
})
