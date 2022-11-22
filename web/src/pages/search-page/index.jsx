import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '@mui/system'
import { ResultGrid } from './components/ResultGrid'

export default function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <NavLink to={`/`}>Dev Page</NavLink>
      <Container>
        <ResultGrid />
      </Container>
    </div>
  )
}