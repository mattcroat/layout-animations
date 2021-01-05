import React from 'react'

import { Album } from './Album'

export function Albums({ albums }) {
  return (
    <section className="albums">
      <h3 className="albums-label">Albums</h3>
      {albums.map((album) => (
        <Album
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
