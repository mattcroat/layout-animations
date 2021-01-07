import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Button } from '@root/components/styled/Button'
import { fadeIn } from '@root/helpers/variants'

export function ArtistBanner({ artistName, coverArt }) {
  return (
    <ArtistSection>
      <ArtistCover
        src={coverArt}
        alt={artistName}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      />

      <ArtistLabel>Artist</ArtistLabel>
      <ArtistName>{artistName}</ArtistName>

      <Actions>
        <Button play>Play</Button>
        <Button follow>Follow</Button>
        <Button more>&#8230;</Button>
      </Actions>
    </ArtistSection>
  )
}

const ArtistSection = styled.section`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background: linear-gradient(transparent, var(--bg));
`

const ArtistCover = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

const ArtistLabel = styled.p`
  margin-left: var(--spacing-32);
  text-transform: uppercase;
`

const ArtistName = styled.h1`
  margin-left: var(--spacing-32);
  font-size: 4rem;
  font-weight: 900;
`

const Actions = styled.div`
  margin-left: var(--spacing-32);
  margin-top: var(--spacing-16);
`
