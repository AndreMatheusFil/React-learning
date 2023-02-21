import React from 'react'
import "./Navbar.css"

import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/*<Link to='/'>Home</Link>
        <Link to='/About'>About</Link>*/}
        <NavLink to='/' /*className={({isActive}) => (isActive ? "css_esta-ativo" : "css_nao-ativo")}*/>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
    </nav>
  )
}

export default Navbar