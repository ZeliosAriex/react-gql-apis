import React from 'react'
import { BaseProps } from '../../../types'
import * as S from './styles'

const SubTitle = ({ children, className }: BaseProps) => {
  return <S.SubTitle className={className}>{children}</S.SubTitle>
}

export default SubTitle
