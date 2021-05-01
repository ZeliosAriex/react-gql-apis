import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DarkModeProvider } from './contexts/darkMode'
import './styles'
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <Helmet titleTemplate='%s | GraphQL APIs' defaultTitle='GraphQL APIs' />
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
