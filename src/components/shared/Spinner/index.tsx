import React from 'react'
import * as S from './styles'

const Spinner = () => {
  return (
    <S.Wrapper>
      <S.Circle delay='-1s' />
      <S.Circle delay='0s' />
    </S.Wrapper>
  )
}

export default Spinner
