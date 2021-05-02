/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CSSObject } from '@emotion/styled'
import { BaseProps } from '../../../types'
import useToast from '../../../hooks/useToast'
import { ErrorIcon } from '../../../assets/icons/smart/ErrorIcon'

type AsyncDataDisplayerProps = BaseProps & {
  data: unknown[]
  error?: string
  options?: {
    customErrorMessage?: string
  }
}

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

const AsyncDataDisplayer = ({
  data,
  error,
  children,
  options,
}: AsyncDataDisplayerProps) => {
  const { t } = useTranslation()
  useToast(
    error ? t('errors.general') : '',
    {
      type: 'error',
      icon: '💩',
    },
    [error]
  )

  if (error)
    return (
      <ErrorDisplayer
        message={error}
        customMessage={options?.customErrorMessage}
      />
    )
  if (!data.length) return <span>{`${t('general.loading')}...`}</span>
  return <>{children}</>
}

export default AsyncDataDisplayer
