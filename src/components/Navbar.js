import React from 'react'
import { Link } from 'gatsby'
//import github from '../img/github-icon.svg'
import logo from '../img/logoHYWeb.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '145px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/home">
          Home
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
