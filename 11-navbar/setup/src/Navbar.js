import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaFacebook } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link) => {
            const {id, url, text} = link; //destructure
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      )}      
      <ul className="social-icons">
        {social.map((soc) => {
          const {id, url, icon} = soc;
          return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
          );
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
