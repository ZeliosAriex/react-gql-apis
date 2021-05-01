/** @jsxImportSource @emotion/react */
import React from 'react'
import * as S from './styles'

const Header = () => {
  // TODO: Navlinks
  const renderNavLinks = () => null

  return (
    <S.Wrapper>
      <S.BrandLink to='/'>
        <S.BrandLogo />
        <S.BrandTitle>GraphQL APIs</S.BrandTitle>
      </S.BrandLink>

      {renderNavLinks()}
    </S.Wrapper>
  )
}

export default Header
