import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge'
}

const Heading = ({ children, size = 'small' }: HeadingProps) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
)

export default Heading
