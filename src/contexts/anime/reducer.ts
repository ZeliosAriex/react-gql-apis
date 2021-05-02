import { ContextReducer } from './types'

export const reducer: ContextReducer = (state, action) => {
  switch (action.type) {
    case 'START_FETCH_ANIME':
      return { ...state, loading: true }
    case 'FINISH_FETCH_ANIME':
      return { ...state, loading: false, data: action.payload }
    case 'ERROR_FETCH_ANIME':
      return { ...state, loading: false, error: action.payload }
    default:
      throw new Error()
  }
}
