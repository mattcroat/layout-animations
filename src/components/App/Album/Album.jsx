import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Information } from './Information'

import { artists } from '@root/helpers/data/artists.js'
import { Error } from '@root/components/styled/Error'

export function Album() {
  const { params } = useRouteMatch()
  const { artist: artistId, album: albumId } = params

  const artist = artists.find((artist) => artist.id === artistId)
  const album = artist && artist.albums.find((album) => album.id === albumId)

  return (
    <>
      {artist && album ? (
        <Information
          artistName={artist.name}
          coverArt={album.cover}
          albumName={album.name}
          yearOfRelease={album.year}
          numberOfTracks={album.tracks.length}
          albumLength={album.length}
          albumTracks={album.tracks}
        />
      ) : (
        <Error>Could not find artist, or album.</Error>
      )}
    </>
  )
}
