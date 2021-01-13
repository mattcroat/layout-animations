import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { fadeIn } from '@root/helpers/variants'
import { Button } from '@root/components/styled/Button'

export function Summary({ coverArt, albumName, albumSummary, displaySummary }) {
  return (
    <Main>
      <Cover
        layoutId="artist-album"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src={coverArt} alt={albumName} />
      </Cover>
      <Bio initial="hidden" animate="show" variants={fadeIn}>
        <Title>{albumName}</Title>
        <Text>{albumSummary}</Text>
        <Button onClick={displaySummary} play>
          Close
        </Button>
      </Bio>
    </Main>
  )
}

const Main = styled.main`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: var(--bg);
  overflow: hidden;
`

const Cover = styled(motion.div)`
  height: 400px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const Bio = styled(motion.div)`
  max-width: 90ch;
  margin: 0 auto;
  padding: 0 var(--spacing-32);
`

const Title = styled.h1`
  font-size: 4rem;
  margin: var(--spacing-32) 0 var(--spacing-16) 0;
`

const Text = styled.p`
  max-width: 80ch;
  line-height: 1.6;
  margin: var(--spacing-16) 0;
`
