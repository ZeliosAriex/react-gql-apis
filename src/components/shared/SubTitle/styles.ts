import styled from '@emotion/styled/macro'

export const SubTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.body};
  transition: ${({ theme }) => theme.transitions.color};
`
