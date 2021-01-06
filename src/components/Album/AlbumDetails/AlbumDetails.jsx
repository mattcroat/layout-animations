import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    <>
      <section className="album">
        <motion.div layoutId="album-details" className="album-details">
          <div className="album-cover">
            <img src={coverArt} alt={albumName} />
          </div>

          <div className="album-info">
            <motion.p
              className="album-label"
              initial="hidden"
              animate="show"
              variants={fadeIn}
            >
              Album
            </motion.p>
            <h2 className="album-title">{albumName}</h2>

            <motion.div
              className="album-summary"
              initial="hidden"
              animate="show"
              variants={fadeIn}
            >
              <div className="artist">
                <span className="text-light">By </span>
                <Link to="/">{artistName}</Link>
              </div>

              <div className="summary text-light">
                <span className="year middledot">{yearOfRelease}</span>
                <span className="number-of-tracks middledot">
                  {numberOfTracks} songs
                </span>
                <span className="length">{albumLength} min</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="actions"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <button className="action-play scale">Play</button>
          <button className="action-heart scale">🤍</button>
          <button className="action-more scale">&#8230;</button>
        </motion.div>
      </section>

      <motion.div layoutId="album-tracks" className="album-tracks">
        <div className="track-labels">
          <div className="number">#</div>
          <div className="heart"></div>
          <div className="title">Title</div>
          <div className="duration">🕒</div>
        </div>

        {albumTracks.map((track) => (
          <div key={track.trackNumber} className="album-track">
            <div className="number">{track.trackNumber}</div>
            <div className="heart">🤍</div>
            <div className="title">{track.title}</div>
            <div className="duration">{track.length}</div>
          </div>
        ))}
      </motion.div>
    </>
  )
}