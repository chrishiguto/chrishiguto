import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Switch from '.'

const props = {
  checked: true,
  handleClick: jest.fn()
}

describe('<Switch />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Switch {...props} />)
  })
})
