import React from 'react'
import '../style/navbar.css'

const Navbar = ({setActiveComponent}) => {
  return (
    <div className='nav-container'>
        <ul>
            <li onClick={() => setActiveComponent('home')}>Home</li>
            <li onClick={() => setActiveComponent('service')}>Local Services</li>
            <li onClick={() => setActiveComponent('ourfleet')}>Our Fleet</li>
            <li onClick={() => setActiveComponent('aboutus')}>About us</li>
            <li onClick={() => setActiveComponent('contactus')}>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar