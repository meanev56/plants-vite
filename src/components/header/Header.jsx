import React from 'react'
import './header.css'

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
        </div>
      </div>
      
    </nav>
  )
}

export default Header
