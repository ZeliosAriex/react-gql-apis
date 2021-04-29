import React from 'react'
import { useTheme } from '@emotion/react'
import { GlobalStyle } from './styles/global'
import Routes from './routes'

const App = (): JSX.Element => {
  // We use this hook to customize the global app styles based on the theme
  const appTheme = useTheme()

  return (
    <>
      <Routes />
      <GlobalStyle theme={appTheme} />
    </>
  )
}

export default App
