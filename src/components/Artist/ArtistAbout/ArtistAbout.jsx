import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function ArtistAbout({ cover, name, bio }) {
  return (
    <main>
      <ArtistCover src={cover} alt={name} />
      <ArtistBio>
        <Title>
          <Link to="/">{name}</Link>
        </Title>
        <Text>{bio}</Text>
      </ArtistBio>
    </main>
  )
}

const ArtistCover = styled(motion.img)`
  height: 300px;
  width: 100%;
  object-fit: cover;
`

const ArtistBio = styled.div`
  max-width: 90ch;
  margin: 0 auto;
  padding: 0 var(--spacing-32);
`

const Title = styled.h1`
  font-size: 4rem;
  margin: var(--spacing-16) 0;
`

const Text = styled.p`
  line-height: 1.6;
  margin: var(--spacing-16) 0;
`
