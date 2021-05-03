import React, { ComponentType } from 'react'
import { getDisplayName } from '../../utils/hocs'

const withProvider = (Component: ComponentType, Provider: ComponentType) => {
  const ComponentWithProvider = ({ ...props }) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    )
  }

  ComponentWithProvider.displayName = getDisplayName('withProvider', Component)

  return ComponentWithProvider
}

export default withProvider
