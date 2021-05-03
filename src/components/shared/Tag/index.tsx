import React from 'react'
import { BaseProps } from '../../../types'
import * as S from './style'

type TagProps = BaseProps

const Tag = ({ children, ...rest }: TagProps) => {
  return <S.Tag {...rest}>{children}</S.Tag>
}

export default Tag
