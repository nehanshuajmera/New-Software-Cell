import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './header.css'
export default function Header() {
  const [display, setDisplay] = useState(window.innerWidth > 1024 ? true : false);
  const [naveff, setnaveff] = useState(0);
  useEffect(() => {
    setnaveff(window.pageYOffset);
    console.log(naveff)
  }, [naveff])

  return (
    <div className="nav-header" >
      <div className="header-bar">
        <div className="header-img-container">
          <NavLink to="/">
            {/* <h2 style={{color:"#E5E5CB"}}><i class="fa-solid fa-code"></i>Software Cell</h2> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" width={"65px"} />
          </NavLink>
          {display ? (
            <p className="cross" onClick={() => setDisplay(!display)}>
              X
            </p>
          ) : (
            <div className="burger" onClick={() => setDisplay(!display)}>
              <div className="line" ></div>
              <div className="line" ></div>
            </div>
          )}
        </div>
        {display ? <div className="nav-items">
          <div className="item1">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/joinus">Join Us</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/project">Project</NavLink>
          </div>
          <div className="item2">
            <NavLink to="/contact"><i class="fa fa-phone" aria-hidden="true"></i>  Contact</NavLink>
          </div>
        </div> : <></>}
      </div>
    </div>)
}
