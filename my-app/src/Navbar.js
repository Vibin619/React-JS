// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bar-warning goku">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:'#ffffff'}}>Steam</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" style={{color:'#ffffff'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link" style={{color:'#ffffff'}}>Community</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{color:'#ffffff'}}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{color:'#ffffff'}}>Cart</Link>
            </li>
          </ul>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png" alt="Steam" className="center" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
