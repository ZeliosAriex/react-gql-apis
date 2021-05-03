import styled from '@emotion/styled/macro'
import BaseCard from '../BaseCard'
import { mq } from '../../../styles/util'

export const Card = styled(BaseCard)`
  display: flex;
  width: 100%;

  ${mq.md} {
    width: auto;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Body = styled.div`
  flex: 1;
  padding: 1rem;
`

export const ImageContainer = styled.div`
  width: 6rem;

  ${mq.md} {
    width: 7rem;
  }

  ${mq.lg} {
    width: 6rem;
  }

  ${mq.xl} {
    width: 8rem;
  }
`
