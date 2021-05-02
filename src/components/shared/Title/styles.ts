import styled from '@emotion/styled/macro'

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
  transition: ${({ theme }) => theme.transitions.color};
`
