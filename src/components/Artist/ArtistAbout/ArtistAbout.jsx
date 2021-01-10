import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export function ArtistAbout({ cover, name, bio }) {
  return (
    <>
      <CoverImage src={cover} alt={name} />
      <h1>{name}</h1>
      <p>{bio}</p>
    </>
  )
}

const CoverImage = styled(motion.img)`
  height: 400px;
  width: 100%;
  object-fit: cover;
`
