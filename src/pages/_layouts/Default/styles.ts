import styled from '@emotion/styled/macro'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.transitions.backgroundColor};
`

export const Main = styled.main``
