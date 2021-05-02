/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { LinkGetProps } from '@reach/router'
import * as S from './styles'
import DarkModeButton from '../DarkModeButton'
import LangButton from '../LangButton'
import useRoutes from '../../../routes/hooks/useRoutes'

const Header = () => {
  const { t } = useTranslation()
  const appRoutes = useRoutes()

  const activeLinkStyle = {
    fontWeight: 'bold',
  }

  const isNavLinkActive = ({ isCurrent }: LinkGetProps) =>
    isCurrent ? { style: activeLinkStyle } : {}

  const renderNavItems = () => {
    return appRoutes.map(r => (
      <S.NavItem key={r.key}>
        <S.NavLink getProps={isNavLinkActive} to={r.url}>
          {r.name}
        </S.NavLink>
      </S.NavItem>
    ))
  }

  return (
    <S.Wrapper>
      <S.BrandLink to='/'>
        <S.BrandLogo />
        <S.BrandTitle>{t('general.appTitle')}</S.BrandTitle>
      </S.BrandLink>

      <S.Body>
        <S.NavItems>{renderNavItems()}</S.NavItems>
      </S.Body>
      <S.RightContainer>
        <LangButton />
        <DarkModeButton />
      </S.RightContainer>
    </S.Wrapper>
  )
}

export default Header
