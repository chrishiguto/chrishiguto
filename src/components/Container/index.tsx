import { ReactNode } from 'react'
import cn from 'classnames'

type ContainerProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}

export const Container = ({ children, size }: ContainerProps) => (
  <div
    className={cn('w-full ml-auto mr-auto pl-4 pr-4', {
      'max-w-screen-sm': size === 'small',
      'max-w-screen-md': size === 'medium',
      'max-w-screen-lg': size === 'large'
    })}
  >
    {children}
  </div>
)
