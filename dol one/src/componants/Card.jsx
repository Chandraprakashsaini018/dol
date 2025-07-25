import React from 'react'

function Card({props}) {
  return (
    <> <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item">
            <div className="service-inner pb-5">
              <img className="img-fluid w-100" src={`http://localhost:5000/${props.img}`} alt="" />
              <div className="service-text px-5 pt-4">
                <h5 className="text-uppercase">{props.title}</h5>
                <p>
                  {props.des}
                </p>
              </div>
              <a className="btn btn-light px-3" href="">
                Read More
                <i className="bi bi-chevron-double-right ms-1" />
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card