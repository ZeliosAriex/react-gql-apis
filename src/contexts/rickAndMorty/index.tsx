import React, { createContext, PropsWithChildren } from 'react'
import { useReducerAsync } from 'use-reducer-async'
import { AsyncAction, ContextReducer, ContextType } from './types'
import { initialState } from './initialState'
import { asyncActionHandlers } from './thunks'
import { reducer } from './reducer'

const RickAndMortyContext = createContext<ContextType>({} as ContextType)

const RickAndMortyProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducerAsync<ContextReducer, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers
  )

  return (
    <RickAndMortyContext.Provider value={{ state, dispatch }}>
      {children}
    </RickAndMortyContext.Provider>
  )
}

export { RickAndMortyContext, RickAndMortyProvider }
