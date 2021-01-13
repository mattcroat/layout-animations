import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Information } from './Information'
import { Summary } from './Summary'

import { artists } from '@root/helpers/data/artists.js'
import { Error } from '@root/components/styled/Error'

export function Album() {
  const [showSummary, setShowSummary] = useState()

  const { params } = useRouteMatch()
  const { artist: artistId, album: albumId } = params

  const artist = artists.find((artist) => artist.id === artistId)
  const album = artist && artist.albums.find((album) => album.id === albumId)

  function handleShowSummary() {
    setShowSummary(!showSummary)
  }

  if (!artist || !album) {
    return <Error>Could not find artist, or album.</Error>
  }

  if (showSummary) {
    return (
      <Summary
        coverArt={album.cover}
        albumName={album.name}
        albumSummary={album.summary}
        displaySummary={handleShowSummary}
      />
    )
  }

  return (
    <Information
      artistName={artist.name}
      coverArt={album.cover}
      albumName={album.name}
      yearOfRelease={album.year}
      numberOfTracks={album.tracks.length}
      albumLength={album.length}
      albumTracks={album.tracks}
      displaySummary={handleShowSummary}
    />
  )
}
