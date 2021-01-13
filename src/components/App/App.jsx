import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Artist } from './Artist'
import { Album } from './Album'

export function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Switch>
        <Route path="/:artist/:album" component={Album} />
        <Route path="/:artist" component={Artist} />

        {/* simulate user already navigated to artist */}
        <Route path="/">
          <Redirect to="/fleetwood-mac" />
        </Route>
      </Switch>
    </AnimateSharedLayout>
  )
}
