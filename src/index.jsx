import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from '@root/components/App'
import { GlobalStyle } from './theme/globalStyle.js'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </StrictMode>,
  rootElement,
)

// fast refresh
if (import.meta.hot) {
  import.meta.hot.accept()
}
