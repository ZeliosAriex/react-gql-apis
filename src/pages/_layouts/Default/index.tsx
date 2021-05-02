import React from 'react'
import * as S from './styles'
import Header from '../../../components/shared/Header'
import { BaseProps } from '../../../types'

const DefaultLayout = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  )
}

export default DefaultLayout
