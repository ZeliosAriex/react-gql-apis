import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'
import useFetchCountries from '../../contexts/countries/hooks/useFetchCountries'
import AsyncDataDisplayer from '../../components/shared/AsyncDataDisplayer'
import Spacer from '../../components/shared/Spacer'
import SubTitle from '../../components/shared/SubTitle'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CountriesDirectoryPage = (props: PageBaseProps) => {
  const { t } = useTranslation()
  const { data, error, loading } = useFetchCountries()

  // TODO: Make components
  const renderCountriesList = () => (
    <AsyncDataDisplayer data={data} error={error} loading={loading}>
      <ul>
        {data.map(c => (
          <li key={c.code + c.name}>{c.name}</li>
        ))}
      </ul>
    </AsyncDataDisplayer>
  )

  return (
    <DefaultLayout>
      <Helmet title={t('pages.countries.shortTitle')} />

      <Title>{t('pages.countries.title')}</Title>
      <SubTitle>{t('pages.countries.subtitle')}</SubTitle>

      <Spacer size='2rem' />

      {renderCountriesList()}
    </DefaultLayout>
  )
}

export default CountriesDirectoryPage
