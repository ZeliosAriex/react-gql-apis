import React, { createContext, PropsWithChildren, useEffect } from 'react'
import { ContextType } from './types'
import { useToggle } from '../../hooks/useToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DarkModeContext = createContext<ContextType>({} as ContextType)

const DarkModeProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [persistedDarkMode, setPersistedDarkMode] = useLocalStorage<boolean>(
    'darkMode',
    false
  )
  const [darkMode, toggleDarkMode] = useToggle(persistedDarkMode)

  useEffect(() => {
    setPersistedDarkMode(darkMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode, setPersistedDarkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, DarkModeProvider }
