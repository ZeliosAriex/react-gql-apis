import { Anime } from '../../contexts/anime/types'

export type AnimeQueryResult = {
  Page: {
    media: Anime[]
  }
}
