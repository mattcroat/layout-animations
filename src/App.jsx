import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { Switch, Route } from 'react-router-dom'

import { ArtistPage } from '@root/views/ArtistPage'
import { AboutPage } from '@root/views/AboutPage'
import { AlbumPage } from '@root/views/AlbumPage'

export function App() {
  return (
    <AnimateSharedLayout>
      <Switch>
        <Route exact path="/" component={ArtistPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/album" component={AlbumPage} />
      </Switch>
    </AnimateSharedLayout>
  )
}
