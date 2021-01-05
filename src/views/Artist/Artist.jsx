import React from 'react'

import { ArtistBanner } from '@root/components/ArtistBanner'
import { Albums } from '@root/components/Albums'
import { artists } from '@root/helpers/data/artists.js'

export function Artist({ artistName = 'Fleetwood Mac' }) {
  const artist = artists.find((artist) => artist.name == artistName)

  return (
    <main className="artist-page">
      <ArtistBanner artistName={artist.name} coverArt={artist.cover} />
      <Albums albums={artist.albums} />
    </main>
  )
}
