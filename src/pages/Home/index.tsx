/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomePage = (props: PageBaseProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <DefaultLayout>
      <Title>{t('pages.home.title')}</Title>
    </DefaultLayout>
  )
}

export default HomePage
