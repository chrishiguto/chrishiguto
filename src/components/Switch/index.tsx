import * as S from './styles'

export type SwitchProps = {
  checked: boolean
  handleClick: () => void
  activeIcon?: React.ReactNode
  inactiveIcon?: React.ReactNode
}

const Switch = ({
  checked,
  handleClick,
  activeIcon,
  inactiveIcon
}: SwitchProps) => (
  <S.Wrapper onClick={handleClick}>
    <S.Circle checked={checked}>
      {!!activeIcon && checked && activeIcon}
      {!!inactiveIcon && !checked && inactiveIcon}
    </S.Circle>
  </S.Wrapper>
)

export default Switch
