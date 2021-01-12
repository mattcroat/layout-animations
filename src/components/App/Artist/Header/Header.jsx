import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Button } from '@root/components/styled/Button'
import { fadeIn } from '@root/helpers/variants'

export function Header({ artistName, coverArt }) {
  return (
    <Section>
      <Cover
        src={coverArt}
        alt={artistName}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      />

      <Label>Artist</Label>
      <Name>{artistName}</Name>

      <Actions>
        <Button play>Play</Button>
        <Button follow>Follow</Button>
        <Button more>&#8230;</Button>
      </Actions>
    </Section>
  )
}

const Section = styled.section`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background: linear-gradient(transparent, var(--bg));
`

const Cover = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

const Label = styled.p`
  margin-left: var(--spacing-32);
  text-transform: uppercase;
`

const Name = styled.h1`
  margin-left: var(--spacing-32);
  font-size: 4rem;
  font-weight: 900;
`

const Actions = styled.div`
  margin-left: var(--spacing-32);
  margin-top: var(--spacing-16);
`
