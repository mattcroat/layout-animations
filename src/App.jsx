import React from 'react'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { artists } from './data'

export function App() {
  return <ArtistPage artistName="Fleetwood Mac" />
}

function ArtistPage({ artistName }) {
  const artist = artists.find((artist) => artist.name == artistName)

  return (
    <main className="artist-page">
      <ArtistInfo artist={artist.name} cover={artist.cover} />
      <Albums albums={artist.albums} />
    </main>
  )
}

function ArtistInfo({ artist, cover }) {
  return (
    <section className="artist-banner">
      <img className="artist-cover" src={cover} alt={artist} />

      <p className="artist-label">Artist</p>
      <h1 className="artist-name">{artist}</h1>

      <div className="actions">
        <button className="action-play scale">Play</button>
        <button className="action-follow scale">Follow</button>
        <button className="action-more scale">&#8230;</button>
      </div>
    </section>
  )
}

function Albums({ albums }) {
  return (
    <section className="albums">
      <h3 className="albums-label">Albums</h3>
      {albums.map((album) => (
        <Album key={album.id} {...album} />
      ))}
    </section>
  )
}

function Album({ name, year, cover, tracks }) {
  return (
    <article className="album">
      <div className="album-details">
        <div className="album-cover">
          <img src={cover} alt={name} />
        </div>

        <div className="album-info">
          <p className="album-year">{year}</p>
          <h2 className="album-title">
            <a className="album-link" href="#">
              {name}
            </a>
          </h2>

          <div className="actions">
            <button className="action-heart scale">🤍</button>
            <button className="action-more scale">&#8230;</button>
          </div>
        </div>
      </div>

      <div className="album-tracks">
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
      </div>
    </article>
  )
}
