import React from 'react'
import { useTranslation } from 'react-i18next'
import { BaseProps } from '../../../types'
import useToast from '../../../hooks/useToast'
import ErrorDisplayer from '../ErrorDisplayer'

type AsyncDataDisplayerProps = BaseProps & {
  data: unknown[]
  loading?: boolean
  error?: string
  options?: {
    customErrorMessage?: string
  }
}

const AsyncDataDisplayer = ({
  data,
  loading,
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

  if (error || !data)
    return (
      <ErrorDisplayer
        message={error || 'Error: data undefined'}
        customMessage={options?.customErrorMessage}
      />
    )
  if (loading) return <span>{`${t('general.loading')}...`}</span>
  return data && data.length ? <>{children}</> : null
}

export default AsyncDataDisplayer
