import { ReactNode } from 'react'
import cn from 'classnames'

export type TextProps = {
  children: ReactNode,
  className?: string,
  color?: 'black' | 'white'
}

const Text = ({ children, className, color = 'white' }: TextProps) => (
  <p className={cn("text-2xl leading-8", className, {
    'text-white': color === 'white',
    'text-black': color === 'black'
  })}>{children}</p>
)

export default Text
