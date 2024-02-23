import { ReactNode } from 'react'

export type TextProps = {
  children: ReactNode
}

const Text = ({ children }: TextProps) => (
  <p className="text-2xl leading-8">{children}</p>
)

export default Text
