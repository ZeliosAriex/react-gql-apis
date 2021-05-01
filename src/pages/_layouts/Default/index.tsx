import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import Header from '../../../components/shared/Header'

const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  )
}

export default DefaultLayout
