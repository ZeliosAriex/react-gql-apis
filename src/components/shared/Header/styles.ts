import styled from '@emotion/styled/macro'

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
`
