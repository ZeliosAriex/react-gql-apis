import React, { useContext } from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from './styles/global'
import Routes from './routes'
import { appDarkTheme, appTheme } from './styles/theme'
import { DarkModeContext } from './contexts/darkMode'

const App = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const theme = darkMode ? appDarkTheme : appTheme

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  )
}

export default App
