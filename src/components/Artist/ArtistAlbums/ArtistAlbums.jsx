import React from 'react'

import { ArtistAlbum } from './ArtistAlbum'

export function ArtistAlbums({ albums }) {
  return (
    <section className="albums">
      <h3 className="albums-label">Albums</h3>
      {albums.map((album) => (
        <ArtistAlbum
          key={album.id}
          albumName={album.name}
          yearOfRelease={album.year}
          coverArt={album.cover}
          tracks={album.tracks}
        />
      ))}
    </section>
  )
}
