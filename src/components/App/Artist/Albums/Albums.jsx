import React from 'react'
import styled from 'styled-components'

import { Album } from './Album'

export function Albums({ albums }) {
  return (
    <Section>
      <Label>Albums</Label>
      {albums.map((album) => (
        <Album
          key={album.id}
          albumName={album.name}
          yearOfRelease={album.year}
          coverArt={album.cover}
          tracks={album.tracks}
        />
      ))}
    </Section>
  )
}

const Section = styled.section`
  margin: var(--spacing-64) var(--spacing-32) 0 var(--spacing-32);
`

const Label = styled.h3`
  &::after {
    content: '';
    height: 1px;
    display: block;
    margin: var(--spacing-16) 0;
    background-color: hsla(0, 0%, 100%, 0.1);
  }
`
