import styled from '@emotion/styled/macro'
import { mq } from '../../../styles/util'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.transitions.backgroundColor};
`

export const Main = styled.main`
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;

  ${mq.md} {
    padding: 2rem;
  }

  ${mq.lg} {
    max-width: 992px;
  }

  ${mq.xl} {
    max-width: 1200px;
  }
`
