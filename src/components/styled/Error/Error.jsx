import React from 'react'
import styled from 'styled-components'

export function Error(props) {
  return (
    <Container>
      <ErrorMessage {...props} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
`

const ErrorMessage = styled.h2`
  font-size: 2rem;
`
