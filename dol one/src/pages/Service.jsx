import React from "react";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";
import Card from "../componants/card";
import { useState,useEffect } from "react";
function Service() {
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
  )
  return (
    <>
      <Navbar/>
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
      <Footer />
    </>
  );
}

export default Service;
