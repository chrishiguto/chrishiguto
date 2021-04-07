import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
}

const Button = ({ children, icon }: ButtonProps) => (
  <S.Wrapper>
    <S.Icon>{!!icon && icon}</S.Icon>
    {children}
  </S.Wrapper>
)

export default Button
