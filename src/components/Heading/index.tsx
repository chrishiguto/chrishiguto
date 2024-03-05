import { Young_Serif } from 'next/font/google'
import cn from 'classnames'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge'
}

const youngSerif = Young_Serif({ subsets: ['latin'], weight: '400' });

const Heading = ({ children, size = 'small' }: HeadingProps) => (
  <h2
    className={cn('text-text dark:text-text-dark', {
      'text-sm': size === 'small',
      'text-base': size === 'medium',
      'text-lg': size === 'large',
      'text-4xl': size === 'xlarge',
      'text-6xl': size === 'huge'
    }, youngSerif.className)}
  >
    {children}
  </h2>
)

export default Heading
