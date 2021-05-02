import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'react-hot-toast'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DarkModeProvider } from './contexts/darkMode'
import './styles'
import './i18n'
import { CountriesProvider } from './contexts/countries'
import { AnimeProvider } from './contexts/anime'

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
        <AnimeProvider>
          <CountriesProvider>
            <Helmet
              titleTemplate='%s | GraphQL APIs'
              defaultTitle='GraphQL APIs'
            />
            <Toaster position='bottom-center' />
            <App />
          </CountriesProvider>
        </AnimeProvider>
      </DarkModeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
