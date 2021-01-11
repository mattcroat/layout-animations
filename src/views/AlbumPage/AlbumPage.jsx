import React from 'react'

import { Album } from '@root/components/Album'
import { artists } from '@root/helpers/data/artists.js'
import { useRouteMatch } from 'react-router-dom'

export function AlbumPage() {
  const { params } = useRouteMatch()
  const artistId = params.artist
  const albumId = params.album

  const artist = artists.find((artist) => artist.id === artistId)
  if (!artist) return <h2>Could not find artist "{artistName}"</h2>

  const album = artist && artist.albums.find((album) => album.id === albumId)
  if (!album) return <h2>Could not find album "{albumName}"</h2>

  return <Album artist={artist} album={album} />
}
