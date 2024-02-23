import { ReactNode } from 'react'

export type EmphasisProps = {
  children: ReactNode
}

const Emphasis = ({ children }: EmphasisProps) => {
  return <em className="text-secondary">{children}</em>
}
export default Emphasis
