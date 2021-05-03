/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'
import useFetchAnime from '../../contexts/anime/hooks/useFetchAnime'
import AsyncDataDisplayer from '../../components/shared/AsyncDataDisplayer'
import SubTitle from '../../components/shared/SubTitle'
import Spacer from '../../components/shared/Spacer'
import AnimeCard from './components/AnimeCard/AnimeCard'
import FlexContainer from '../../components/shared/FlexContainer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimeDirectoryPage = (props: PageBaseProps) => {
  const { t } = useTranslation()
  const { data, error, loading } = useFetchAnime()

  const renderAnimeList = () => (
    <AsyncDataDisplayer data={data} error={error} loading={loading}>
      {data.map(a => (
        <AnimeCard key={a.id} data={a} />
      ))}
    </AsyncDataDisplayer>
  )

  return (
    <DefaultLayout>
      <Helmet title={t('pages.anime.shortTitle')} />

      <Title>{t('pages.anime.title')}</Title>
      <SubTitle>{t('pages.anime.subtitle')}</SubTitle>

      <Spacer size='2rem' />

      <FlexContainer css={{ justifyContent: 'space-between' }}>
        {renderAnimeList()}
      </FlexContainer>
    </DefaultLayout>
  )
}

export default AnimeDirectoryPage
