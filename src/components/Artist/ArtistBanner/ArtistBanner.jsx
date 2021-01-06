import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '@root/helpers/variants'

export function ArtistBanner({ artistName, coverArt }) {
  return (
    <section className="artist-banner">
      <motion.img
        className="artist-cover"
        src={coverArt}
        alt={artistName}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      />

      <p className="artist-label">Artist</p>
      <h1 className="artist-name">{artistName}</h1>

      <div className="actions">
        <button className="action-play scale">Play</button>
        <button className="action-follow scale">Follow</button>
        <button className="action-more scale">&#8230;</button>
      </div>
    </section>
  )
}
