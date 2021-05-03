import styled from '@emotion/styled/macro'
import { mq } from '../../../styles/util'

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${mq.md} {
    flex-flow: row wrap;
  }
`
