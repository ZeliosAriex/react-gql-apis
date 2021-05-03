import styled from '@emotion/styled/macro'

export const Tag = styled.span`
  font-weight: 500;
  border-radius: 8px;
  font-size: 0.75rem;
  padding: 0.15rem 0.35rem;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  background-color: ${({ theme }) => theme.components.tag.backgroundColor};
  color: ${({ theme }) => theme.components.tag.textColor};
  transition: ${({ theme }) =>
    `${theme.transitions.backgroundColor}, ${theme.transitions.color}`};
`
