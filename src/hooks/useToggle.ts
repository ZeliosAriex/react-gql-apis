import { useCallback, useState } from 'react'

type HookReturnType = readonly [boolean, () => void]

/**
 * Simple hook to manage a toggleable state
 * @param initialState The initial state of the toggle
 */
export const useToggle = (initialState = false): HookReturnType => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => setState(s => !s), [])

  return [state, toggle] as const
}
