import styled from '@emotion/styled/macro'
import { Link } from '@reach/router'
import { Graphqlcon } from '../../../assets/icons/Graphqlcon'

export const Wrapper = styled.header`
  min-height: 3.125rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: 1rem;
  line-height: 1.5;
  box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.title};

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`

export const BrandLogo = styled(Graphqlcon)`
  width: 2em;
  margin-right: 0.5rem;
`

export const BrandTitle = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 1.313rem;
  letter-spacing: -1px;
`
