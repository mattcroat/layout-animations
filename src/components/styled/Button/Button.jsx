import React from 'react'
import styled from 'styled-components'

export function Button({ play, follow, more, heart, ...props }) {
  if (play) return <Play {...props} />
  if (follow) return <Follow {...props} />
  if (more) return <More {...props} />
  if (heart) return <Heart {...props} />

  return <Action {...props} />
}

const Action = styled.button`
  color: var(--text-color);
  margin: 0 var(--spacing-8);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: scale 0.3s;

  &:hover {
    scale: 1.04;
    /* fixes wonky transition */
    backface-visibility: hidden;
  }
`

const Play = styled(Action)`
  background-color: var(--brand-color);
  margin-left: 0;
  padding: var(--spacing-8) var(--spacing-32);
  border-radius: 20px;
`

const Follow = styled(Action)`
  background-color: hsla(0, 0%, 0%, 0.4);
  padding: var(--spacing-8) var(--spacing-64);
  border: 1px solid hsla(0, 0%, 80%, 0.8);
  border-radius: 20px;
`

const More = styled(Action)`
  width: 34px;
  height: 34px;
  background-color: hsla(0, 0%, 0%, 0.4);
  border: 1px solid hsla(0, 0%, 80%, 0.8);
  border-radius: 50%;
`

const Heart = styled(Action)`
  width: 34px;
  height: 34px;
  margin-right: var(--spacing-8);
  font-size: 1rem;
  background-color: hsla(0, 0%, 0%, 0.4);
  color: var(--text-color);
  border: 1px solid hsla(0, 0%, 80%, 0.8);
  border-radius: 50%;
  cursor: pointer;
`