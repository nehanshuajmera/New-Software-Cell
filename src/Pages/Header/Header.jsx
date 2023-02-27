import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="./logo192.png" width={"6%"} />
      </div>      
      <div className='center-navbar'>
      <h4>Our Services</h4>
      <h4>About</h4>
      <h4>Projects</h4>
      </div>
      <div className="right-navbar">
        <h4><i class="fa fa-phone" aria-hidden="true"></i> Contact US</h4>
      </div>
    </div>
  )
}
