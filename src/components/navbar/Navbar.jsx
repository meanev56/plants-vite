import React from 'react'
import './navbar.css'
import {FaUserAlt} from 'react-icons/fa'
import {BsCart4} from 'react-icons/bs'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className="nav">
        <img src='images/logo-png.png' alt='PlantNig' className='brand-logo'/>
        <div className="nav-items">
          <div className="search">
            <input type='text' className='search-box' placeholder='search genus, family'/>
            <button className='search-btn'>search</button>
          </div>
          <a href='#'><FaUserAlt className='img'/> </a>
          <a href='#'><BsCart4 className='img'/> </a>
        </div>
      </div>
      <ul className='links-container'>
          <li className='link-item'><a href='#' className='link'>home</a></li>
          <li className='link-item'><a href='#' className='link'>about</a></li>
          <li className='link-item'><a href='#' className='link'>contact us</a></li>
          <li className='link-item'><a href='#' className='link'>Support Us</a></li>
        </ul> 
    </nav>
  )
}

export default Header
