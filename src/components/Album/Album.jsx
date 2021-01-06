import React from 'react'

import { AlbumDetails } from './AlbumDetails'

export function Album({ artist, album }) {
  return (
    <AlbumDetails
      artistName={artist.name}
      coverArt={album.cover}
      albumName={album.name}
      yearOfRelease={album.year}
      numberOfTracks={album.tracks.length}
      albumLength={album.length}
      albumTracks={album.tracks}
    />
  )
}
