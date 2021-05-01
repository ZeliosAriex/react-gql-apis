/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const Header = () => {
  const { t } = useTranslation()

  // TODO: Navlinks
  const renderNavLinks = () => null

  return (
    <S.Wrapper>
      <S.BrandLink to='/'>
        <S.BrandLogo />
        <S.BrandTitle>{t('general.appTitle')}</S.BrandTitle>
      </S.BrandLink>

      {renderNavLinks()}
    </S.Wrapper>
  )
}

export default Header
