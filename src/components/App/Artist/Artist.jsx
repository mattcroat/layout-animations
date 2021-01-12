import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Albums } from './Albums'
import { Header } from './Header'

import { artists } from '@root/helpers/data/artists.js'
import { Error } from '@root/components/styled/Error'

export function Artist() {
  const match = useRouteMatch()
  const artistId = match.params.artist

  const artist = artists.find((artist) => artist.id === artistId)

  return (
    <main>
      {artist ? (
        <>
          <Header artistName={artist.name} coverArt={artist.cover} />
          <Albums albums={artist.albums} />
        </>
      ) : (
        <Error>Could not find artist.</Error>
      )}
    </main>
  )
}
