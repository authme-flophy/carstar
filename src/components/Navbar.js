import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <h2>
            car<span>star</span>
          </h2>
        </div>

        <div className='navbar-nav'>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
