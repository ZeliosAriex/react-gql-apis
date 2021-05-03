import React from 'react'
import * as S from './style'
import { BaseProps } from '../../../types'

type FlexContainerProps = BaseProps

const FlexContainer = ({ children, ...rest }: FlexContainerProps) => {
  return <S.FlexContainer {...rest}>{children}</S.FlexContainer>
}

export default FlexContainer
