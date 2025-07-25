import React from 'react'

function Team(props) {
  return (
    <>
    
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src={props.img} alt="" />
              <div className="team-social">
                <a className="btn btn-square btn-dark mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-dark mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-dark mx-1" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="btn btn-square btn-dark mx-1" href="">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-1">{props.name}</h5>
              <span>{props.pro}</span>
            </div>
          </div>
        </div>
      
      
    </>
  )
}

export default Team