import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { ArtistAbout } from '@root/components/Artist/ArtistAbout'
import { artists } from '@root/helpers/data/artists.js'
import { formatCase } from '@root/helpers/utilities'

export function AboutPage() {
  const match = useRouteMatch()
  const artistName = formatCase(match.params.artist, 'camel')

  const artist = artists.find((artist) => artist.name === artistName)
  if (!artist) return <h2>Could not find artist "{artistName}"</h2>

  return (
    <ArtistAbout cover={artist.cover} name={artist.name} bio={artist.bio} />
  )
}
