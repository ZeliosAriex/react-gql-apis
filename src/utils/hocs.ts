import { ComponentType } from 'react'

export const getDisplayName = (
  hocName: string,
  component: ComponentType
): string =>
  `${hocName}(${component.displayName || component.name || 'Component'})`
