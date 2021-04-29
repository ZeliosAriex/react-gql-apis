import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'

// Lazy load pages
const HomePage = lazy(() => import('../pages/Home'))

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <HomePage path='/' />
      </Router>
    </Suspense>
  )
}

export default Routes
