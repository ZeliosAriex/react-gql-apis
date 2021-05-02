import React, { createContext, PropsWithChildren } from 'react'
import { useReducerAsync } from 'use-reducer-async'
import { AsyncAction, ContextReducer, ContextType } from './types'
import { initialState } from './initialState'
import { asyncActionHandlers } from './thunks'
import { reducer } from './reducer'

const CountriesContext = createContext<ContextType>({} as ContextType)

const CountriesProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [state, dispatch] = useReducerAsync<ContextReducer, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers
  )

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  )
}

export { CountriesContext, CountriesProvider }
