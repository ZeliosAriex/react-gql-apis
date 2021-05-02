import React, { createContext, PropsWithChildren, useEffect } from 'react'
import { ContextType } from './types'
import { useToggle } from '../../hooks/useToggle'
import { LS_DARKMODE_KEY } from '../../utils/constants'

const DarkModeContext = createContext<ContextType>({} as ContextType)

const DarkModeProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  // Not using useLocalStorage hook because it triggers unnecesary render
  const persistedDarkMode = localStorage.getItem(LS_DARKMODE_KEY) === 'true'
  const [darkMode, toggleDarkMode] = useToggle(persistedDarkMode)

  useEffect(() => {
    localStorage.setItem(LS_DARKMODE_KEY, darkMode.toString())
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, DarkModeProvider }
