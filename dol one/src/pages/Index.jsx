import React, { useEffect } from "react";
import Footer from "../componants/Footer";
import Header from "../componants/Header";
import Navbar from "../componants/Navbar";
import Card from "../componants/card";
import Team from "../componants/Team";
import About from "../componants/About";
import Features from "../componants/Features";
import Features1 from "../componants/Features1";
import { Link } from "react-router-dom";
import Service from "../pages/Service";
import { useState } from "react";

function Index() {
  // let arr = [
  //   {
  //     title: "Metal works",
  //     img: "img/service-1.jpg",
  //     des: "It is a metal welding work",
  //   },
  //   {
  //     title: "Steel welding",
  //     img: "img/service-2.jpg",
  //     des: "It is the steel welding work",
  //   },
  //   {
  //     title: "pipe welding",
  //     img: "img/service-3.jpg",
  //     des: "It is a pipe welding work",
  //   },
  //   {
  //     title: "Custom welding",
  //     img: "img/service-4.jpg",
  //     des: "It is the Custom welding work",
  //   },
  //   {
  //     title: "Metal works",
  //     img: "img/service-6.jpg",
  //     des: "It is a metal welding work",
  //   },
  //   {
  //     title: "Steel welding",
  //     img: "img/service-5.jpg",
  //     des: "It is the steel welding work",
  //   },
  //   {
  //     title: "Custom welding",
  //     img: "img/service-7.jpg",
  //     des: "It is a Custom welding work",
  //   },
  //   {
  //     title: "Pipe welding",
  //     img: "img/service-8.jpg",
  //     des: "It is the Pipe welding work",
  //   },
  // ];
  let [arr,setarr]=useState([])
  useEffect(()=>{
    const apifetch=async()=>{
    let response=await fetch("http://localhost:5000/user/productGetall");
    let jsonresponse= await response.json();
    console.log(jsonresponse)

    
    setarr(jsonresponse.data)}
    apifetch();
  },[]
  );
  const [FormData, setFormData] = useState({
      Name: "",
      email: "",
      Mobile: "",
      Service: "Steel Welding",
      Message: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch("http://localhost:5000/jaipur/userregister", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(FormData)
        });
  
        const data = await res.json();
  
        if (data.status) {
          alert("User registered successfully!");
          setFormData({
            Name: "",
            email: "",
            Mobile: "",
            Service: "Steel Welding",
            Message: ""
          });
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        alert("Server error: " + error.message);
      }
    };

  return (
    <>
      {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    >
      </div>
  </div> */}
      {/* Spinner End */}

      <Header />
      {/* Topbar End */}
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}
      {/* Carousel Start */}
      <div
        className="container-fluid p-0 mb-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            </button>
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            >
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
            </button>
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            >
              <img className="img-fluid" src="img/carousel-3.jpg" alt="Image" />
            </button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                  Best Metalcraft Solutions
                </h1>
                <a href="#" className="btn btn-primary py-3 px-4">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                  Best Metalcraft Solutions
                </h1>
                <a href="#" className="btn btn-primary py-3 px-4">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption">
                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                  Best Metalcraft Solutions
                </h1>
                <a href="#" className="btn btn-primary py-3 px-4">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <About />
      {/* About End */}
      {/* Features Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container pt-4">
          <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
            <Features
              title={"Quality welding"}
              des={"It given the best quality welding"}
              icon={"fa fa-hammer fa-2x text-white"}
            />
            <Features
              title={"Affordable Pricing"}
              des={"It given the best Affordable Pricing"}
              icon={"fa fa-dollar-sign fa-2x text-white"}
            />
            <Features
              title={"Best Welder"}
              des={"It given the best welder"}
              icon={"fa fa-check-double fa-2x text-white"}
            />
            <Features
              title={"Quality Tools"}
              des={"It provide the best Quality tools"}
              icon={"fa fa-tools fa-2x text-white"}
            />
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* Features1 Start */}
      <Features1 />
      {/* Features1 End */}
      {/* Service Start */}
      <div className="container-fluid service pt-6 pb-6">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="display-6 text-uppercase mb-5">
              Reliable &amp; High-Quality Welding Services
            </h1>
          </div>
          <div className="row g-4">
            {arr.map((item)=>(
              <Card props={item}/>
            ))}
            </div>
        </div>
      </div>
      {/* Service End */}
      {/* Appoinment Start */}
      <div
        className="container-fluid appoinment mt-6 mb-6 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pt-5">
          <div className="row gy-5 gx-0">
            <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 text-uppercase text-white mb-4">
                We Complete Welding &amp; Metal Projects in Time
              </h1>
              <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                tortor.
              </p>
              <div
                className="d-flex align-items-start wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="btn-lg-square bg-white">
                  <i className="bi bi-geo-alt text-dark fs-3" />
                </div>
                <div className="ms-3">
                  <h6 className="text-white text-uppercase">Office Address</h6>
                  <span className="text-white">123 Street, New York, USA</span>
                </div>
              </div>
              <hr className="bg-body" />
              <div
                className="d-flex align-items-start wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div className="btn-lg-square bg-white">
                  <i className="bi bi-clock text-dark fs-3" />
                </div>
                <div className="ms-3">
                  <h6 className="text-white text-uppercase">Office Time</h6>
                  <span className="text-white">
                    Mon-Sat 09am-5pm, Sun Closed
                  </span>
                </div>
              </div>
            </div>
         <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
      <div className="bg-white p-5">
        <h2 className="text-uppercase mb-4">Online Appointment</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0 bg-light"
                id="name"
                placeholder="Your Name"
                name="Name"
                value={FormData.Name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control border-0 bg-light"
                id="mail"
                placeholder="Your email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="mail">Email</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0 bg-light"
                id="mobile"
                placeholder="Your Mobile"
                name="Mobile"
                value={FormData.Mobile}
                onChange={handleChange}
                required
              />
              <label htmlFor="mobile">Mobile</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <select
                className="form-select border-0 bg-light"
                id="service"
                name="Service"
                value={FormData.Service}
                onChange={handleChange}
              >
                <option value="Steel Welding">Steel Welding</option>
                <option value="Pipe Welding">Pipe Welding</option>
                <option value="Metal Welding">Metal Welding</option>
                <option value="Custom Welding">Custom Welding</option>
              </select>
              <label htmlFor="service">Service</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control border-0 bg-light"
                placeholder="Leave a message here"
                id="message"
                style={{ height: 130 }}
                name="Message"
                value={FormData.Message}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
          </div>
        </div>
      </div>
      {/* Appoinment End */}
      {/* Team Start */}
      <div className="container-fluid team pt-6 pb-6">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="display-6 text-uppercase mb-5">
              Meet Our Professional and Experience Welder
            </h1>
          </div>
          <div className="row g-4">
            <Team img={"img/team-1.jpg"} name={"Alex Robin"} pro={"Welder"} />
            <Team img={"img/team-2.jpg"} name={"Andrew Bon"} pro={"Welder"} />
            <Team
              img={"img/team-3.jpg"}
              name={"Martin Tompson"}
              pro={"Welder"}
            />
            <Team
              img={"img/team-4.jpg"}
              name={"Clarabelle Samber"}
              pro={"Welder"}
            />
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="display-6 text-uppercase mb-5">
              What They’re Talking About Our Welding Work
            </h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
              <div className="testimonial-img">
                <div className="animated flip infinite">
                  <img
                    className="img-fluid"
                    src="img/testimonial-1.jpg"
                    alt=""
                  />
                </div>
                <div className="animated flip infinite">
                  <img
                    className="img-fluid"
                    src="img/testimonial-2.jpg"
                    alt=""
                  />
                </div>
                <div className="animated flip infinite">
                  <img
                    className="img-fluid"
                    src="img/testimonial-3.jpg"
                    alt=""
                  />
                </div>
                <div className="animated flip infinite">
                  <img
                    className="img-fluid"
                    src="img/testimonial-4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      className="img-fluid"
                      src="img/testimonial-1.jpg"
                      alt=""
                    />
                    <div className="ms-3">
                      <div className="mb-2">
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                      </div>
                      <h5 className="text-uppercase">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                </div>
                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      className="img-fluid"
                      src="img/testimonial-2.jpg"
                      alt=""
                    />
                    <div className="ms-3">
                      <div className="mb-2">
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                      </div>
                      <h5 className="text-uppercase">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                </div>
                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      className="img-fluid"
                      src="img/testimonial-3.jpg"
                      alt=""
                    />
                    <div className="ms-3">
                      <div className="mb-2">
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                      </div>
                      <h5 className="text-uppercase">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                </div>
                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      className="img-fluid"
                      src="img/testimonial-4.jpg"
                      alt=""
                    />
                    <div className="ms-3">
                      <div className="mb-2">
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                        <i className="far fa-star text-primary" />
                      </div>
                      <h5 className="text-uppercase">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Newsletter Start */}
      <div
        className="container-fluid newsletter mt-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="bg-white p-5 mb-5">
            <div className="row g-5">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
                <div className="d-flex">
                  <i className="far fa-envelope-open fa-3x text-primary me-4" />
                  <p className="fs-5 fst-italic mb-0">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore lorem ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control border-0 bg-light"
                    id="mail"
                    placeholder="Your email"
                  />
                  <label htmlFor="mail">Your email</label>
                </div>
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Start*/}
      <Footer />
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid text-body copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="fw-semi-bold" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <a className="fw-semi-bold" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed by{" "}
              <a href="https://themewagon.com" target="_blank">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*copyright end*/}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

export default Index;
