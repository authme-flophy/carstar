import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/'>
            About
        </NavLink>
        <NavLink to='/addnote'>
            Cotacts
        </NavLink>
        </div>
  )
}

export default NavBar