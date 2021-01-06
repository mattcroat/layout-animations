import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ArtistAlbum({ albumName, yearOfRelease, coverArt, tracks }) {
  return (
    <article className="album">
      <motion.div layoutId="album-details" className="album-details">
        <div className="album-cover">
          <Link to="/album">
            <img src={coverArt} alt={albumName} />
          </Link>
        </div>

        <div className="album-info">
          <p className="album-year">{yearOfRelease}</p>
          <h2 className="album-title">
            <Link to="/album">{albumName}</Link>
          </h2>

          <div className="actions">
            <button className="action-heart scale">🤍</button>
            <button className="action-more scale">&#8230;</button>
          </div>
        </div>
      </motion.div>

      <motion.div layoutId="album-tracks" className="album-tracks">
        <div className="track-labels">
          <div className="number">#</div>
          <div className="heart"></div>
          <div className="title">Title</div>
          <div className="duration">🕒</div>
        </div>

        {tracks.map((track) => (
          <div key={track.trackNumber} className="album-track">
            <div className="number">{track.trackNumber}</div>
            <div className="heart">🤍</div>
            <div className="title">{track.title}</div>
            <div className="duration">{track.length}</div>
          </div>
        ))}
      </motion.div>
    </article>
  )
}
