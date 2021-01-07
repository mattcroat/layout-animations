import React from 'react'

import { Artist } from '@root/components/Artist'
import { artists } from '@root/helpers/data/artists.js'

export function ArtistPage() {
  // pretend we got this from /artist url path
  const artistName = 'Fleetwood Mac'

  const artist = artists.find((artist) => artist.name === artistName)
  if (!artist) return <h2>Could not find artist "{artistName}"</h2>

  return <Artist artist={artist} />
}
