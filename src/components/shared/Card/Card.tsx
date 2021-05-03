/** @jsxImportSource @emotion/react */
import React from 'react'
import { BaseProps } from '../../../types'
import * as S from './styles'

type CardProps = BaseProps & {
  image?: string
}

const Card = ({ image, children, ...rest }: CardProps) => {
  return (
    <S.Card {...rest}>
      {image && (
        <S.ImageContainer
          css={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      )}
      <S.Body>{children}</S.Body>
    </S.Card>
  )
}

export default Card
