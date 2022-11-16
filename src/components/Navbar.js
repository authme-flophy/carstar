import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/carsForSale'>CarsForSale</NavLink>
      {/* <NavLink to='/'>CarsForHire</NavLink> */}
    </>
  )
}

export default Navbar