import { State } from './types'

export const initialState: Readonly<State> = {
  characters: {
    error: '',
    loading: false,
    data: [],
  },
  episodes: {
    error: '',
    loading: false,
    data: [],
  },
}
