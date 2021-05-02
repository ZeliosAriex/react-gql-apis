import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'
import AsyncDataDisplayer from '../../components/shared/AsyncDataDisplayer'
import Spacer from '../../components/shared/Spacer'
import SubTitle from '../../components/shared/SubTitle'
import useFetchCharacters from '../../contexts/rickAndMorty/hooks/useFetchCharacters'
import withProvider from '../../components/hoc/withProvider'
import { RickAndMortyProvider } from '../../contexts/rickAndMorty'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RickAndMortyDirectory = (props: PageBaseProps) => {
  const { t } = useTranslation()
  const {
    characters: { data, error, loading },
  } = useFetchCharacters()

  // TODO: Make components
  const renderCountriesList = () => (
    <AsyncDataDisplayer data={data} error={error} loading={loading}>
      <ul>
        {data.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </AsyncDataDisplayer>
  )

  return (
    <DefaultLayout>
      <Helmet title={t('pages.rickAndMorty.shortTitle')} />

      <Title>{t('pages.rickAndMorty.title')}</Title>
      <SubTitle>{t('pages.rickAndMorty.subtitle')}</SubTitle>

      <Spacer size='2rem' />

      {renderCountriesList()}
    </DefaultLayout>
  )
}

// Attach provider only to this page
export default withProvider(RickAndMortyDirectory, RickAndMortyProvider)
