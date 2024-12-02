import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container container-1 py-2 align-items-center d-flex justify-content-between'>
      <p className='fs-5 text-light'>Weather App</p>
      <nav className='d-flex'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/features'>Forecast</NavLink>
        <NavLink to='/enterprise'>Enterprise</NavLink>
        <NavLink to='/support'>Support</NavLink>
        
      </nav>
      
    </div>
  )
}

export default Navbar
