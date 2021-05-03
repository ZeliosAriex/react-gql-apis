import styled from '@emotion/styled/macro'

export const BaseCard = styled.div`
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  transition: ${({ theme }) =>
    `${theme.transitions.backgroundColor}, ${theme.transitions.color}`};
`
