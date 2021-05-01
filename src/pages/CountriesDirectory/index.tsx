import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CountriesDirectoryPage = (props: PageBaseProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <DefaultLayout>
      <Helmet title={t('pages.countries.shortTitle')} />
      <Title>{t('pages.countries.title')}</Title>
    </DefaultLayout>
  )
}

export default CountriesDirectoryPage
