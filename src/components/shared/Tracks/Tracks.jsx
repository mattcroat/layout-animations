import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { fadeIn } from '@root/helpers/variants'

export function Tracks({ albumTracks }) {
  return (
    <AlbumTracks
      layoutId="album-tracks"
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      <TrackLabels>
        <Number>#</Number>
        <Heart></Heart>
        <Title>Title</Title>
        <Duration>🕒</Duration>
      </TrackLabels>

      {albumTracks.map((track) => (
        <AlbumTrack key={track.trackNumber}>
          <Number>{track.trackNumber}</Number>
          <Heart>🤍</Heart>
          <Title>{track.title}</Title>
          <Duration>{track.length}</Duration>
        </AlbumTrack>
      ))}
    </AlbumTracks>
  )
}

const AlbumTracks = styled(motion.div)`
  /* kept for semantics */
`

const TrackLabels = styled.div`
  display: flex;
  padding: var(--spacing-16) 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`

const Number = styled.div`
  flex-basis: 10%;
`

const Heart = styled.div`
  flex-basis: 10%;
`

const Title = styled.div`
  flex-basis: 70%;
`

const Duration = styled.div`
  flex-basis: 10%;
  text-align: center;
`

const AlbumTrack = styled.div`
  display: flex;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 0%, 14%);
  }

  & > * {
    padding: var(--spacing-16) 0;
  }

  &:not(:last-child) > * {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  }
`
