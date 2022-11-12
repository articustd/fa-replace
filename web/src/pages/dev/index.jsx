import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dev() {
    return (
        <div>
            <h1>Dev Page</h1>
            <NavLink to={`home`}>Homepage</NavLink>
        </div>
    )
}