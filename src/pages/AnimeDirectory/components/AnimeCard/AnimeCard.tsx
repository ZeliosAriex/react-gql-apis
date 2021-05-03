/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BaseProps } from '../../../../types'
import { Anime } from '../../../../contexts/anime/types'
import * as S from './styles'
import Tag from '../../../../components/shared/Tag'

type AnimeCardProps = BaseProps & {
  data: Anime
  numberOfTags?: number
}

const AnimeCard = ({ data, numberOfTags = 3 }: AnimeCardProps) => {
  const { t } = useTranslation()
  if (!data) return null

  const {
    episodes,
    title: { english: title },
    coverImage: { large: image },
    tags,
    averageScore,
    nextAiringEpisode,
  } = data

  const numberOfEpisodes = episodes || nextAiringEpisode.episode || 0

  return (
    <S.AnimeCard image={image}>
      <S.Body>
        <S.AvgScore
          averageScore={averageScore}>{`${averageScore}%`}</S.AvgScore>
        <S.HeaderContainer>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{`${numberOfEpisodes} ${t(
            'words.episodes'
          )}`}</S.SubTitle>
        </S.HeaderContainer>
        <S.TagContainer>
          {tags.slice(0, numberOfTags || 1).map(tg => (
            <Tag css={{ margin: '.15rem' }} key={tg.name}>
              {tg.name}
            </Tag>
          ))}
        </S.TagContainer>
      </S.Body>
    </S.AnimeCard>
  )
}

export default AnimeCard
