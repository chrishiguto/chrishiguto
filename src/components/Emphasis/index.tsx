import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'

export type EmphasisProps = {
  children: ReactNode
}

const Emphasis = ({ children }: EmphasisProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
export default Emphasis
