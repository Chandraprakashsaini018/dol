import React from 'react'

function Header() {
  return (
    <>
    <div
    className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-3">
      <div className="d-flex align-items-center">
        <a href="Index">
          <h2 className="text-white fw-bold m-0">WELDORK</h2>
        </a>
        <div className="ms-auto d-flex align-items-center">
          <small className="ms-4">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </small>
          <small className="ms-4">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </small>
          <div className="ms-3 d-flex">
            <a
              className="btn btn-sm-square btn-light text-primary ms-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-sm-square btn-light text-primary ms-2"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-sm-square btn-light text-primary ms-2"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Header