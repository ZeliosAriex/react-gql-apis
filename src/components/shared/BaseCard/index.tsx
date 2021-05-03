import React from 'react'
import { BaseProps } from '../../../types'
import * as S from './styles'

const BaseCard = ({ children, ...rest }: BaseProps) => {
  return <S.BaseCard {...rest}>{children}</S.BaseCard>
}

export default BaseCard
