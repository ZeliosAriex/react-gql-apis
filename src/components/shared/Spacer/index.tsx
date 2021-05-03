/** @jsxImportSource @emotion/react */
import React from 'react'
import { BaseProps } from '../../../types'

type SpacerProps = BaseProps & {
  size: number | string
  axis?: 'vertical' | 'horizontal'
}

const Spacer = ({ size, axis = 'vertical', ...rest }: SpacerProps) => {
  const width = axis === 'vertical' ? 1 : size
  const height = axis === 'horizontal' ? 1 : size
  return (
    <span
      css={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
      {...rest}
    />
  )
}
export default Spacer
