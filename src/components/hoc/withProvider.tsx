/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType } from 'react'
import { getDisplayName } from '../../utils/hocs'

const withProvider = (Component: ComponentType, Provider: any) => {
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
