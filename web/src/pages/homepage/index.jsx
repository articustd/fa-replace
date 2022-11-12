import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
    return (
        <div>
            <h1>Home Page</h1>
            <NavLink to={`/`}>Dev Page</NavLink>
        </div>
    )
}