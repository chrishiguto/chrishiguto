import { ReactNode } from 'react'
import cn from 'classnames'

type ContainerProps = {
  children: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export const Container = ({
  children,
  className,
  size = 'large'
}: ContainerProps) => (
  <div
    className={cn('w-full ml-auto mr-auto pl-4 pr-4', className, {
      'max-w-screen-sm': size === 'small',
      'max-w-screen-md': size === 'medium',
      'max-w-screen-lg': size === 'large'
    })}
  >
    {children}
  </div>
)
