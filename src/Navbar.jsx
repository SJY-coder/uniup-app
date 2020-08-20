import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        <img src="./uniuplogotrans.png" width="100" height="50" className="d-inline-block align-top" alt="" loading="lazy"/>
         </a>
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarNav" ariaControls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#concept">concept</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sikumi">仕組み</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
