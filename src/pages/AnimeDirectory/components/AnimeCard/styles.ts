import styled from '@emotion/styled/macro'
import { Theme } from '@emotion/react'
import Card from '../../../../components/shared/Card/Card'
import { mq } from '../../../../styles/util'

type AvgScoreProps = {
  averageScore: number
}

const getAvgColor = (averageScore: number, theme: Theme) => {
  if (averageScore >= 70) return theme.colors.success
  if (averageScore >= 50) return theme.colors.warning
  return theme.colors.error
}

export const AnimeCard = styled(Card)`
  width: 100%;
  min-height: 130px;

  ${mq.md} {
    width: 49%;
  }

  ${mq.xl} {
    width: 32%;
  }
`

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: space-between;
`

export const AvgScore = styled.span<AvgScoreProps>`
  position: absolute;
  right: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ averageScore, theme }) => getAvgColor(averageScore, theme)};
`

export const HeaderContainer = styled.div`
  line-height: 1.1;
  margin-bottom: 1rem;
`

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  width: 80%;
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 0.25rem;

  ${mq.lg} {
    width: 75%;
  }
`

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.placeholder};
`
