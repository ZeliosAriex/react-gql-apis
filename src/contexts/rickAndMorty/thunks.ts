import { AsyncActionHandlerType } from './types'
import { rickAndMortyQuery } from '../../graphql/rickAndMorty/client'
import { getAllCharacters } from '../../graphql/rickAndMorty/queries/getAllCharacters'
import { CharacterQueryResult } from '../../graphql/rickAndMorty/types'

export const asyncActionHandlers: AsyncActionHandlerType = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FETCH_CHARACTERS: ({ dispatch, signal }) => async action => {
    dispatch({ type: 'START_FETCH_CHARACTERS' })
    try {
      const { data } = await rickAndMortyQuery<CharacterQueryResult>(
        getAllCharacters()
      )
      if (!signal.aborted)
        dispatch({
          type: 'FINISH_FETCH_CHARACTERS',
          payload: data.characters.results,
        })
    } catch (e) {
      if (!signal.aborted)
        dispatch({ type: 'ERROR_FETCH_CHARACTERS', payload: e.message })
    }
  },
}
