import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Artist } from '@root/components/Artist'
import { artists } from '@root/helpers/data/artists.js'

export function ArtistPage() {
  const { params } = useRouteMatch()
  const artistId = params.artist

  const artist = artists.find((artist) => artist.id === artistId)
  if (!artist) return <h2>Could not find artist "{artistName}"</h2>

  return <Artist artist={artist} />
}
