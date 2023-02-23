import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/About`}>Sobre</NavLink>
    </nav>
  )
}

export default NavBar