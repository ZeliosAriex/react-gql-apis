import { Character, Episode, PageInfo } from '../../contexts/rickAndMorty/types'

export type CharacterQueryResult = {
  characters: {
    info: PageInfo
    results: Character[]
  }
}

export type EpisodeQueryResult = {
  episodes: {
    info: PageInfo
    results: Episode[]
  }
}
