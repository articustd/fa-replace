import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '@mui/system'

export default function SearchPage() {
  return (
    <div>
      <h1>Story Page</h1>
      <NavLink to={`/`}>Dev Page</NavLink>
      <Container>
      </Container>
    </div>
  )
}