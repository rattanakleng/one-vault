import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click) // make it toggle between true and false
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="navbar-logo" src="./assets/img/logo.png" alt="Logo" />

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/viewPassword"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                View Password
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/createPassword"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Create Password
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}


