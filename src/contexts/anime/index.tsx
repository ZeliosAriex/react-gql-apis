import React, { createContext, PropsWithChildren } from 'react'
import { useReducerAsync } from 'use-reducer-async'
import { AsyncAction, ContextReducer, ContextType } from './types'
import { initialState } from './initialState'
import { asyncActionHandlers } from './thunks'
import { reducer } from './reducer'

const AnimeContext = createContext<ContextType>({} as ContextType)

const AnimeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducerAsync<ContextReducer, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers
  )

  return (
    <AnimeContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimeContext.Provider>
  )
}

export { AnimeContext, AnimeProvider }
