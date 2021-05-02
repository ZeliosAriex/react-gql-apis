import { Dispatch, Reducer } from 'react'
import { AsyncActionHandlers } from 'use-reducer-async'
import { BaseState } from '../types'

export type Anime = {
  id: number
  title: {
    english: string
    romaji: string
    native: string
  }
  format: string
  status: string
  popularity: number
  countryOfOrigin: string
}

export type State = BaseState<Anime>

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
  | { type: 'START_FETCH_ANIME' }
  | { type: 'FINISH_FETCH_ANIME'; payload: Anime[] }
  | { type: 'ERROR_FETCH_ANIME'; payload: string }

/**
 * This are asyncronous actions used to run a thunk
 */
export type AsyncAction = { type: 'FETCH_ANIME' }

export type Action = InnerActions | OuterActions | AsyncAction

export type Actions = {
  fetchAnime: () => Action
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
