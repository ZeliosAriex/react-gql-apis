import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Spinner from '../components/shared/Spinner'

// Lazy load pages
const HomePage = lazy(() => import('../pages/Home'))
const AnimeDirectoryPage = lazy(() => import('../pages/AnimeDirectory'))
const CountriesDirectoryPage = lazy(() => import('../pages/CountriesDirectory'))
const RickAndMortyDirectoryPage = lazy(
  () => import('../pages/RickAndMortyDirectory')
)

// TODO: improve paths
const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <HomePage path='/' />
        <AnimeDirectoryPage path='/anime' />
        <CountriesDirectoryPage path='/countries' />
        <RickAndMortyDirectoryPage path='/rick-and-morty' />
      </Router>
    </Suspense>
  )
}

export default Routes
