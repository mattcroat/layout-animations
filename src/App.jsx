import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { Switch, Route } from 'react-router-dom'

import { Artist } from '@root/views/Artist'
import { Album } from '@root/views/Album'

export function App() {
  return (
    <AnimateSharedLayout>
      <Switch>
        <Route exact path="/" component={Artist} />
        <Route path="/album" component={Album} />
      </Switch>
    </AnimateSharedLayout>
  )
}
