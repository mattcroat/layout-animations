import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { AlbumTracks } from '@root/components/shared/AlbumTracks'
import { Button } from '@root/components/styled/Button'
import { fadeIn } from '@root/helpers/variants'

export function AlbumDetails({
  artistName,
  coverArt,
  albumName,
  yearOfRelease,
  numberOfTracks,
  albumLength,
  albumTracks,
}) {
  return (
    <AlbumSection>
      <Album>
        <AlbumCover layoutId="artist-album">
          <img src={coverArt} alt={albumName} />
        </AlbumCover>

        <AlbumInformation>
          <AlbumLabel initial="hidden" animate="show" variants={fadeIn}>
            Album
          </AlbumLabel>

          <AlbumTitle layoutId="album-title">{albumName}</AlbumTitle>

          <AlbumSummary initial="hidden" animate="show" variants={fadeIn}>
            <ArtistName>
              <TextLight>
                By <Link to="/">{artistName}</Link>
              </TextLight>
            </ArtistName>
            <TextLight middledot>{yearOfRelease}</TextLight>
            <TextLight middledot>{numberOfTracks} songs</TextLight>
            <TextLight>{albumLength} min</TextLight>
          </AlbumSummary>
        </AlbumInformation>
      </Album>

      <Actions initial="hidden" animate="show" variants={fadeIn}>
        <Button play>Play</Button>
        <Button heart>🤍</Button>
        <Button more>&#8230;</Button>
      </Actions>

      <AlbumTracks albumTracks={albumTracks} />
    </AlbumSection>
  )
}

const AlbumSection = styled(motion.section)`
  padding: var(--spacing-32);
`

const Album = styled(motion.div)`
  display: flex;
`

const AlbumCover = styled(motion.div)`
  height: 200px;

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
`

const AlbumInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 var(--spacing-16);
`

const AlbumLabel = styled(motion.span)`
  text-transform: uppercase;
`

const AlbumTitle = styled(motion.h2)`
  font-size: 2.4rem;
`

const AlbumSummary = styled(motion.div)`
  margin-top: auto;
`

const ArtistName = styled.div`
  margin-bottom: var(--spacing-8);
`

const TextLight = styled.span`
  display: inline-block;
  color: var(--text-light);

  ${({ middledot }) =>
    middledot &&
    `
      &::after {
        content: '\\00b7';
        margin: 0 0.2rem;
      }
    `}
`

const Actions = styled(motion.div)`
  margin: var(--spacing-16) 0;
`
