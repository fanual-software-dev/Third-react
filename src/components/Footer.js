import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container footer d-flex justify-content-around border-top pt-5'>
        <div className='d-flex flex-column align-items-center '>
            <p className='fs-4 fw-bold'>Features</p>
            <Link className='' to='/cool'>Cool stuff</Link>
            <Link className='link' to='/random'>Random feature</Link>
            <Link className='link' to='/team'>Team feature</Link>
        </div>

        <div className='d-flex flex-column align-items-center'>
            <p className='fs-4 fw-bold'>Resources</p>
            <Link className='link' to='/resource'>Resource</Link>
            <Link className='link' to='/resource name'>Resource name</Link>
        </div>

        <div className='d-flex flex-column align-items-center'>
            <p className='fs-4 fw-bold'>About</p>
            <Link className='link' to='/team'>Team</Link>
            <Link className='link' to='/locations'>Locations</Link>
        </div>
      
    </div>
  )
}

export default Footer
