import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import * as themeHook from 'hooks/theme/theme'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu without switch button', () => {
    const { container } = renderWithTheme(<Menu />)

    expect(screen.getByRole('heading', { name: /ch\./i })).toBeInTheDocument()
    expect(screen.queryByLabelText(/switch button/i)).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the switch button if userTheme is defined', () => {
    jest.spyOn(themeHook, 'useTheme').mockImplementation(() => ({
      userTheme: 'dark',
      toggleTheme: jest.fn()
    }))

    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/switch button/i)).toBeInTheDocument()
  })
})
