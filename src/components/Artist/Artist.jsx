import React from 'react'

import { ArtistBanner } from './ArtistBanner'
import { ArtistAlbums } from './ArtistAlbums'

export function Artist({ artist }) {
  return (
    <>
      <ArtistBanner artistName={artist.name} coverArt={artist.cover} />
      <ArtistAlbums albums={artist.albums} />
    </>
  )
}
