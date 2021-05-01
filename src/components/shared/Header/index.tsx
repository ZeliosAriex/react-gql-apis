/** @jsxImportSource @emotion/react */
import React from 'react'
import * as S from './styles'
import { Graphqlcon } from '../../../assets/icons/Graphqlcon'

const Header = () => {
  return (
    <S.Wrapper>
      <Graphqlcon css={{ width: '2em' }} />
    </S.Wrapper>
  )
}

export default Header
