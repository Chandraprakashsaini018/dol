import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import { useState } from 'react';

function Appoinment() {
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
    <Navbar/>
    <div className="pt-6 pb-6">
  <div
    className="container-fluid appoinment py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container pt-5">
      <div className="row gy-5 gx-0">
        <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
          <h1 className="display-6 text-uppercase text-white mb-4">
            We Complete Welding &amp; Metal Projects in Time
          </h1>
          <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
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
              <span className="text-white">Mon-Sat 09am-5pm, Sun Closed</span>
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
</div>
<Footer/>
    </>
  )
}

export default Appoinment