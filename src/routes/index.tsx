import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Spinner from '../components/shared/Spinner'

// Lazy load pages
const HomePage = lazy(() => import('../pages/Home'))
const AnimeDirectoryPage = lazy(() => import('../pages/AnimeDirectory'))
const CountriesDirectoryPage = lazy(() => import('../pages/CountriesDirectory'))

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <HomePage path='/' />
        <AnimeDirectoryPage path='/anime' />
        <CountriesDirectoryPage path='/countries' />
      </Router>
    </Suspense>
  )
}

export default Routes
