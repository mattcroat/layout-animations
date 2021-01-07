import React from 'react'

import { Album } from '@root/components/Album'
import { artists } from '@root/helpers/data/artists.js'

export function AlbumPage() {
  // pretend we got this from /album-name url path
  const artistName = 'Fleetwood Mac'
  const albumName = 'Tango in the Night'

  const artist = artists.find((artist) => artist.name === artistName)
  if (!artist) return <h2>Could not find artist "{artistName}"</h2>

  const album =
    artist && artist.albums.find((album) => album.name === albumName)
  if (!album) return <h2>Could not find album "{albumName}"</h2>

  return <Album artist={artist} album={album} />
}
