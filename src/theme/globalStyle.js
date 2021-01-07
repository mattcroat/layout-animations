import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --sans-serif: 'Inter', sans-serif;
    --bg: hsl(200, 10%, 10%);
    --text-color: snow;
    --text-light: hsl(0, 0%, 60%);
    --brand-color: limegreen;
    --spacing-8: 0.5rem;
    --spacing-16: 1rem;
    --spacing-32: 2rem;
    --spacing-64: 4rem;
  }

  body {
    font-family: var(--sans-serif);
    background: var(--bg);
    color: var(--text-color);
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }
`
