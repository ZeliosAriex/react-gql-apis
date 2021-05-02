import styled from '@emotion/styled/macro'
import { Link } from '@reach/router'
import { Graphqlcon } from '../../../assets/icons/smart/Graphqlcon'
import { mq } from '../../../styles/util'

export const Wrapper = styled.header`
  min-height: 3.125rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: 1rem;
  line-height: 1.5;
  box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
  z-index: 10;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  transition: ${({ theme }) => theme.transitions.backgroundColor};
`

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  color: ${({ theme }) => theme.colors.title};

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`

export const BrandLogo = styled(Graphqlcon)`
  width: 1.75em;
  margin-right: 0.5rem;
`

export const BrandTitle = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 1em;

  ${mq.md} {
    font-size: 1.313rem;
  }
`

export const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;

  ${mq.md} {
    margin-left: 3rem;
  }
`

export const NavItem = styled.li`
  font-size: 0.875rem;
  margin-right: 1.15rem;
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.title};
  transition: ${({ theme }) => theme.transitions.color};
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
