import React from 'react'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export function App() {
  return (
    <main class="artist-page">
      <section className="artist-banner">
        <img
          class="artist-cover"
          src="https://images.unsplash.com/photo-1541099413580-823d9a3b59ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="Cover"
        />

        <p class="artist-label">Artist</p>
        <h1 class="artist-name">Fleetwood Mac</h1>

        <div className="actions">
          <button class="action-play">Play</button>
          <button class="action-follow">Follow</button>
          <button class="action-more">&#8230;</button>
        </div>
      </section>

      <section className="albums">
        <h3 class="albums-label">Albums</h3>

        <article className="album">
          <div className="album-details">
            <div className="album-cover">
              <img
                src="https://images.unsplash.com/photo-1541099413580-823d9a3b59ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt="Cover"
              />
            </div>

            <div className="album-info">
              <p class="info-year">1987</p>
              <h2 class="info-title">Tango in the Night</h2>

              <div className="actions">
                <button className="action-heart">🤍</button>
                <button className="action-more">&#8230;</button>
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
            <div class="album-track">
              <div className="number">1</div>
              <div className="heart">🤍</div>
              <div className="title">Title</div>
              <div className="duration">3:00</div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
