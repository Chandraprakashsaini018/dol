import React from "react";

function Features(props) {
  return (
    <>
      <div
        className="col-md-6 col-lg-3 wow fadeIn"
        data-wow-delay="0.3s"
        id="Feature"
      >
        <div className="feature-item border h-100">
          <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
            <i className={props.icon} />
          </div>
          <div className="p-5 pt-0">
            <h5 className="text-uppercase mb-3">{props.title}</h5>
            <p>{props.des}</p>
            <a
              className="position-relative text-body text-uppercase small d-flex justify-content-between"
              href="#"
            >
              <b className="bg-white pe-3">Read More</b>{" "}
              <i className="bi bi-arrow-right bg-white ps-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
