import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container container-1 py-4 align-items-center d-flex justify-content-between'>
      <p className='fs-4'>Company name</p>
      <nav className='d-flex w-25'>
        <NavLink to='/features'>Features</NavLink>
        <NavLink to='/enterprise'>Enterprise</NavLink>
        <NavLink to='/support'>Support</NavLink>
        <NavLink to='/'>Home</NavLink>
      </nav>
      
    </div>
  )
}

export default Navbar
