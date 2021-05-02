/** @jsxImportSource @emotion/react */
import React from 'react'
import { CSSObject } from '@emotion/styled'
import { ErrorIcon } from '../../../assets/icons/smart/ErrorIcon'

const ErrorDisplayer = ({
  message,
  customMessage,
}: {
  message: string
  customMessage?: string
}) => {
  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  } as CSSObject
  const errorIconStyles = { width: '5rem', marginBottom: '1rem' }
  return (
    <div css={wrapperStyles}>
      <ErrorIcon css={errorIconStyles} />
      {customMessage && <p>{customMessage}</p>}
      <p>{message}</p>
    </div>
  )
}

export default ErrorDisplayer
