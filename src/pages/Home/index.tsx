/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CSSObject } from '@emotion/styled'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'
import SubTitle from '../../components/shared/SubTitle'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomePage = (props: PageBaseProps) => {
  const { t } = useTranslation()

  const titleStyles = {
    textAlign: 'center',
  } as CSSObject

  return (
    <DefaultLayout>
      <Helmet title={t('pages.home.shortTitle')} />
      <Title css={{ ...titleStyles, marginTop: '2rem' }}>
        {t('pages.home.title')}
      </Title>
      <SubTitle css={titleStyles}>{t('pages.home.subtitle')}</SubTitle>
    </DefaultLayout>
  )
}

export default HomePage
