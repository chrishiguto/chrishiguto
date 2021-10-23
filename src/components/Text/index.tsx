import { ReactNode } from 'react'
import * as S from './styles'

export type TextProps = {
  children: ReactNode
}

const Text = ({ children }: TextProps) => <S.Wrapper>{children}</S.Wrapper>

export default Text
