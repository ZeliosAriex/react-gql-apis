import React from 'react'
import { BaseProps } from '../../../types'
import * as S from './styles'

const Title = ({ children, className }: BaseProps) => {
  return <S.Title className={className}>{children}</S.Title>
}

export default Title
