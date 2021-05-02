import { Dispatch, Reducer } from 'react'
import { AsyncActionHandlers } from 'use-reducer-async'
import { BaseState } from '../types'

export type Country = {
  code: string
  name: string
  capital: string
}

export type State = BaseState<Country>

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
  | { type: 'START_FETCH_COUNTRIES' }
  | { type: 'FINISH_FETCH_COUNTRIES'; payload: Country[] }
  | { type: 'ERROR_FETCH_COUNTRIES'; payload: string }

/**
 * This are asyncronous actions used to run a thunk
 */
export type AsyncAction = { type: 'FETCH_COUNTRIES' }

export type Action = InnerActions | OuterActions | AsyncAction

export type Actions = {
  fetchCountries: () => Action
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
