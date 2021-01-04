import React from 'react'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Switch, Route, Link } from 'react-router-dom'
import { artists } from './data'

export function App() {
  return (
    <>
      <AnimateSharedLayout>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={ArtistPage} />
            <Route path="/album" component={AlbumPage} />
          </Switch>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  )
}

function ArtistPage({ artistName = 'Fleetwood Mac' }) {
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
            <Link className="album-link" to="/album">
              {name}
            </Link>
          </h2>

          <div className="actions">
            <button className="action-heart scale">🤍</button>
            <button className="action-more scale">&#8230;</button>
          </div>
        </div>
      </div>

      <AlbumTracks tracks={tracks} />
    </article>
  )
}

function AlbumTracks({ tracks }) {
  return (
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
  )
}

function AlbumPage() {
  const cover =
    'https://upload.wikimedia.org/wikipedia/en/9/97/Fleetwood_Mac_-_Tango_in_the_Night.png'
  const name = 'Tango in the Night'
  const year = 1980
  const tracks = artists[0].albums[0].tracks
  const artist = 'Fleetwood Mac'
  const numberOfTracks = tracks.length
  const length = 46

  return (
    <main className="album-page">
      <section className="album">
        <div className="album-details">
          <div className="album-cover">
            <img src={cover} alt={name} />
          </div>

          <div className="album-info">
            <p className="album-label">Album</p>
            <h2 className="album-title">{name}</h2>

            <div className="album-summary">
              <div className="artist">
                <span class="text-light">By</span> {artist}
              </div>

              <div className="summary text-light">
                <span class="year middledot">{year}</span>
                <span class="number-of-tracks middledot">
                  {numberOfTracks} songs
                </span>
                <span className="length">{length} min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="action-play scale">Play</button>
          <button className="action-heart scale">🤍</button>
          <button className="action-more scale">&#8230;</button>
        </div>

        <AlbumTracks tracks={tracks} />
      </section>
    </main>
  )
}
