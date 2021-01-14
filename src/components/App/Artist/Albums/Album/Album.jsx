import React from 'react'
import { motion } from 'framer-motion'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '@root/components/styled/Button'
import { Tracks } from '@root/components/shared/Tracks'

export function Album({ albumId, albumName, yearOfRelease, coverArt, tracks }) {
  const { url } = useRouteMatch()

  return (
    <Article>
      <Details>
        <Link to={`${url}/${albumId}`}>
          <Cover layoutId="artist-album">
            <img src={coverArt} alt={albumName} />
          </Cover>
        </Link>

        <Summary>
          {yearOfRelease}
          <Title layoutId="album-title">
            <Link to={`${url}/${albumId}`}>{albumName}</Link>
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
  position: relative;
  height: 200px;

  &::after {
    content: '';
    height: 200px;
    width: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: linear-gradient(var(--brand-color), transparent);
    transform-origin: top left;
    transform: translateX(-50%) translateY(-50%);
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    border-radius: 50%;
  }

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
