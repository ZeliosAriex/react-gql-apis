import { Dispatch, Reducer } from 'react'
import { AsyncActionHandlers } from 'use-reducer-async'
import { BaseState } from '../types'

export type PageInfo = {
  count: number
  pages: number
  next: number
  prev: number
}

export type Episode = {
  id: string
  name: string
  air_date: string
  episode: string
  characters: Character[]
  created: string
}

export type Character = {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: Episode[]
  created: string
}

// This is more complex state in comparison with others
export type State = {
  characters: BaseState<Character>
  episodes: BaseState<Episode>
}

/**
 * This are normal syncronous actions
 * Example:
 * { type: 'INCREMENT'; payload: number }
 */
export type InnerActions = never

/**
 * This are syncronous actions that will be triggered from a thunk
 */
export type OuterActions =
  | { type: 'START_FETCH_CHARACTERS' }
  | { type: 'FINISH_FETCH_CHARACTERS'; payload: Character[] }
  | { type: 'ERROR_FETCH_CHARACTERS'; payload: string }

/**
 * This are asyncronous actions used to run a thunk
 */
export type AsyncAction = { type: 'FETCH_CHARACTERS' }

export type Action = InnerActions | OuterActions | AsyncAction

export type Actions = {
  fetchCharacters: () => Action
}

export type AsyncActionHandlerType = AsyncActionHandlers<
  ContextReducer,
  AsyncAction
>

export type ContextReducer = Reducer<State, Action>
export type ContextType = {
  state: State
  dispatch: Dispatch<Action>
}
