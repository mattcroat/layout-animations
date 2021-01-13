import React from 'react'
import { motion } from 'framer-motion'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '@root/components/styled/Button'
import { Tracks } from '@root/components/shared/Tracks'
import { fadeIn } from '@root/helpers/variants'

export function Information({
  artistName,
  coverArt,
  albumName,
  yearOfRelease,
  numberOfTracks,
  albumLength,
  albumTracks,
  displaySummary,
}) {
  const {
    params: { artist },
  } = useRouteMatch()

  return (
    <Main>
      <Album>
        <Cover layoutId="artist-album">
          <img src={coverArt} alt={albumName} />
        </Cover>

        <AlbumInformation>
          <Label initial="hidden" animate="show" variants={fadeIn}>
            Album
          </Label>

          <Title>{albumName}</Title>

          <Summary initial="hidden" animate="show" variants={fadeIn}>
            <ArtistName>
              <TextLight>
                By <Link to={`/${artist}`}>{artistName}</Link>
              </TextLight>
            </ArtistName>
            <TextLight middledot>{yearOfRelease}</TextLight>
            <TextLight middledot>{numberOfTracks} songs</TextLight>
            <TextLight>{albumLength} min</TextLight>
          </Summary>
        </AlbumInformation>
      </Album>

      <Actions initial="hidden" animate="show" variants={fadeIn}>
        <Button play>Play</Button>
        <Button heart>🤍</Button>
        <Button onClick={displaySummary} more>
          &#8230;
        </Button>
      </Actions>

      <Tracks albumTracks={albumTracks} />
    </Main>
  )
}

const Main = styled(motion.main)`
  position: relative;
  padding: var(--spacing-32);
  overflow: hidden;
`

const Album = styled(motion.div)`
  display: flex;
`

const Cover = styled(motion.div)`
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

const Label = styled(motion.span)`
  text-transform: uppercase;
`

const Title = styled(motion.h2)`
  font-size: 2.4rem;
`

const Summary = styled(motion.div)`
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
