import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'
import useFetchCountries from '../../contexts/countries/hooks/useFetchCountries'
import AsyncDataDisplayer from '../../components/shared/AsyncDataDisplayer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CountriesDirectoryPage = (props: PageBaseProps): JSX.Element => {
  const { t } = useTranslation()
  const { data, error } = useFetchCountries()

  // TODO: Make components
  const renderCountriesList = () => (
    <AsyncDataDisplayer data={data} error={error}>
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

      {renderCountriesList()}
    </DefaultLayout>
  )
}

export default CountriesDirectoryPage
