import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div
    className="container-fluid bg-white sticky-top wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
        <a href="Index" className="navbar-brand d-lg-none">
          <h1 className="fw-bold m-0">WELDORK</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="Index" className="nav-item nav-link active">
              Home
            </a>
            <a href="About" className="nav-item nav-link">
              About
            </a>
            <a href="Service" className="nav-item nav-link">
              Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                <a href="Features" className="dropdown-item">
                  Features
                </a>
                <a href="Team" className="dropdown-item">
                  Our Team
                </a>
                <a href="Testimonial" className="dropdown-item">
                  Testimonial
                </a>
                <a href="Appoinment" className="dropdown-item">
                  Appoinment
                </a>
                <a href="Four zero four" className="dropdown-item">
                  Four Page
                </a>
              </div>
            </div>
            <a href="Contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="ms-auto d-none d-lg-block">
            <a href="" className="btn btn-primary py-2 px-3">
              Get A Quote
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
    </>
  )
}

export default Navbar