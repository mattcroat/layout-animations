import React from 'react'
import { motion } from 'framer-motion'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '@root/components/styled/Button'
import { Tracks } from '@root/components/shared/Tracks'
import { formatCase } from '@root/helpers/utilities'

export function Album({ albumName, yearOfRelease, coverArt, tracks }) {
  const { url } = useRouteMatch()

  return (
    <Article>
      <Details>
        <Cover layoutId="artist-album">
          <Link to={`${url}/${formatCase(albumName, 'kebab')}`}>
            <img src={coverArt} alt={albumName} />
          </Link>
        </Cover>

        <Summary>
          {yearOfRelease}
          <Title layoutId="album-title">
            <Link to={`${url}/${formatCase(albumName, 'kebab')}`}>
              {albumName}
            </Link>
          </Title>

          <Actions>
            <Button heart>🤍</Button>
            <Button more>&#8230;</Button>
          </Actions>
        </Summary>
      </Details>

      <Tracks albumTracks={tracks} />
    </Article>
  )
}

const Article = styled.article`
  margin-bottom: var(--spacing-32);
`

const Details = styled(motion.div)`
  display: flex;
  margin: var(--spacing-16) 0;
`

const Cover = styled(motion.div)`
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

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 var(--spacing-16);
`

const Title = styled(motion.h2)`
  font-size: 2.4rem;
`
