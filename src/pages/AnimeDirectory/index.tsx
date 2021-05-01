import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimeDirectoryPage = (props: PageBaseProps) => {
  const { t } = useTranslation()
  return (
    <DefaultLayout>
      <Helmet title={t('pages.anime.shortTitle')} />
      <Title>{t('pages.anime.title')}</Title>
    </DefaultLayout>
  )
}

export default AnimeDirectoryPage
