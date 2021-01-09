import React from 'react'
import { motion } from 'framer-motion'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { AlbumTracks } from '@root/components/shared/AlbumTracks'
import { Button } from '@root/components/styled/Button'
import { formatCase } from '@root/helpers/utilities'

export function ArtistAlbum({ albumName, yearOfRelease, coverArt, tracks }) {
  const match = useRouteMatch()

  return (
    <AlbumArticle>
      <AlbumDetails>
        <AlbumCover layoutId="artist-album">
          <Link to={`${match.url}/${formatCase(albumName, 'kebab')}`}>
            <img src={coverArt} alt={albumName} />
          </Link>
        </AlbumCover>

        <AlbumSummary>
          {yearOfRelease}
          <AlbumTitle layoutId="album-title">
            <Link to={`${match.url}/${formatCase(albumName, 'kebab')}`}>
              {albumName}
            </Link>
          </AlbumTitle>

          <Actions>
            <Button heart>🤍</Button>
            <Button more>&#8230;</Button>
          </Actions>
        </AlbumSummary>
      </AlbumDetails>

      <AlbumTracks albumTracks={tracks} />
    </AlbumArticle>
  )
}

const AlbumArticle = styled.article`
  margin-bottom: var(--spacing-32);
`

const AlbumDetails = styled(motion.div)`
  display: flex;
  margin: var(--spacing-16) 0;
`

const AlbumCover = styled(motion.div)`
  height: 200px;

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
`

const Actions = styled.div`
  margin-top: auto;
`

const AlbumSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 var(--spacing-16);
`

const AlbumTitle = styled(motion.h2)`
  font-size: 2.4rem;
`
