import { ContextReducer } from './types'

export const reducer: ContextReducer = (state, action) => {
  switch (action.type) {
    case 'START_FETCH_CHARACTERS':
      return { ...state, characters: { ...state.characters, loading: true } }
    case 'FINISH_FETCH_CHARACTERS':
      return {
        ...state,
        characters: {
          ...state.characters,
          loading: false,
          data: action.payload,
        },
      }
    case 'ERROR_FETCH_CHARACTERS':
      return {
        ...state,
        characters: {
          ...state.characters,
          loading: false,
          error: action.payload,
        },
      }
    default:
      throw new Error()
  }
}
