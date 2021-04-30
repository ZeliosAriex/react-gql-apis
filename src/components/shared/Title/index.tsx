import React from 'react'
import { BaseProps } from '../../../types'
import * as S from './styles'

const Title = ({ children }: BaseProps): JSX.Element => {
  return <S.Title>{children}</S.Title>
}

export default Title
