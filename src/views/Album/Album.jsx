import React from 'react'

import { AlbumBanner } from '@root/components/Albums/Album/AlbumBanner'
import { AlbumTracks } from '@root/components/Albums/Album/AlbumTracks'
import { artists } from '@root/helpers/data/artists.js'

export function Album({
  artistName = 'Fleetwood Mac',
  albumName = 'Tango in the Night',
}) {
  const artist = artists.find((artist) => artist.name == artistName)
  const album = artist.albums.find((album) => album.name === albumName)

  return (
    <main className="album-page">
      <AlbumBanner
        artistName={artist.name}
        coverArt={album.cover}
        albumName={album.name}
        yearOfRelease={album.year}
        numberOfTracks={album.tracks.length}
        albumLength={album.length}
      />
      <AlbumTracks tracks={album.tracks} />
    </main>
  )
}
