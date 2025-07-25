import React from 'react'
import Footer from '../componants/Footer'
import Navbar from '../componants/Navbar'

function Four() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid pt-6 pb-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <i className="bi bi-exclamation-triangle display-1 text-primary" />
        <h1 className="display-1 text-uppercase">404</h1>
        <h2 className="text-uppercase mb-4">Page Not Found</h2>
        <p className="mb-4">
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <a className="btn btn-primary py-3 px-4" href="">
          Go Back To Home
        </a>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default Four