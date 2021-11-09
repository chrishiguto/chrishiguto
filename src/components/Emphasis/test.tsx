import { render } from '@testing-library/react'

import Emphasis from '.'

describe('<Emphasis />', () => {
  it('should render the heading', () => {
    render(<Emphasis>This is a text</Emphasis>)
  })
})
