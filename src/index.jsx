import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './App.jsx'
import './style.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement,
)

// fast refresh
if (import.meta.hot) {
  import.meta.hot.accept()
}
