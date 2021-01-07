import React from 'react'
import styled from 'styled-components'

import { ArtistAlbum } from './ArtistAlbum'

export function ArtistAlbums({ albums }) {
  return (
    <AlbumsSection>
      <AlbumsLabel>Albums</AlbumsLabel>
      {albums.map((album) => (
        <ArtistAlbum
          key={album.id}
          albumName={album.name}
          yearOfRelease={album.year}
          coverArt={album.cover}
          tracks={album.tracks}
        />
      ))}
    </AlbumsSection>
  )
}

const AlbumsSection = styled.section`
  margin: var(--spacing-64) var(--spacing-32) 0 var(--spacing-32);
`

const AlbumsLabel = styled.h3`
  &::after {
    content: '';
    height: 1px;
    display: block;
    margin: var(--spacing-16) 0;
    background-color: hsla(0, 0%, 100%, 0.1);
  }
`
