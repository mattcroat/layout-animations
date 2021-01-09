import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { Switch, Route, Redirect } from 'react-router-dom'

import { ArtistPage } from '@root/views/ArtistPage'
import { AboutPage } from '@root/views/AboutPage'
import { AlbumPage } from '@root/views/AlbumPage'

export function App() {
  return (
    <AnimateSharedLayout>
      <Switch>
        <Route path="/:artist/about" component={AboutPage} />
        <Route path="/:artist/:album" component={AlbumPage} />
        <Route path="/:artist" component={ArtistPage} />

        {/* simulate user already navigated to artist */}
        <Route path="/">
          <Redirect to="/fleetwood-mac" />
        </Route>
      </Switch>
    </AnimateSharedLayout>
  )
}
