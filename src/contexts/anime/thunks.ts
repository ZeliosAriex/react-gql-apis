import { AsyncActionHandlerType } from './types'
import { animeQuery } from '../../graphql/anime/client'
import { getAllAnime } from '../../graphql/anime/queries/allAnime'
import { AnimeQueryResult } from '../../graphql/anime/types'

export const asyncActionHandlers: AsyncActionHandlerType = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FETCH_ANIME: ({ dispatch, signal }) => async action => {
    dispatch({ type: 'START_FETCH_ANIME' })
    try {
      const { data } = await animeQuery<AnimeQueryResult>(getAllAnime())
      if (!signal.aborted)
        dispatch({ type: 'FINISH_FETCH_ANIME', payload: data.Page.media })
    } catch (e) {
      if (!signal.aborted)
        dispatch({ type: 'ERROR_FETCH_ANIME', payload: e.message })
    }
  },
}
