import cn from 'classnames'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge'
}

const Heading = ({ children, size = 'small' }: HeadingProps) => (
  <h2
    className={cn('font-young text-text dark:text-text-dark', {
      'text-sm': size === 'small',
      'text-base': size === 'medium',
      'text-lg': size === 'large',
      'text-4xl': size === 'xlarge',
      'text-6xl': size === 'huge'
    })}
  >
    {children}
  </h2>
)

export default Heading
