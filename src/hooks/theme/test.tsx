import { renderHook, act } from '@testing-library/react-hooks'
import { ThemeProvider, useTheme } from './theme'

describe('Theme hook', () => {
  it('should be able to toggle theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    })

    await act(async () => {
      result.current.toggleTheme()
    })

    expect(result.current.userTheme).toEqual('dark')

    await act(async () => {
      result.current.toggleTheme()
    })

    expect(result.current.userTheme).toEqual('light')
  })
})
