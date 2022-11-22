import React from 'react'
import '@style/example.scss'
import { NavLink } from 'react-router-dom'

export default function Dev() {
    return (
        <div className='container'>
            <div className='header'><h1>Dev Page</h1></div>
            <NavLink to={`home`}>Homepage</NavLink><br/>
            <NavLink to={`search`}>Search Page</NavLink>
        </div>
    )
}