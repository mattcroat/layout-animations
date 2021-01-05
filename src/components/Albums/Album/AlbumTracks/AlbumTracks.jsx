import React from 'react'
import { motion } from 'framer-motion'

export function AlbumTracks({ tracks }) {
  return (
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
  )
}
