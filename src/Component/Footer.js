import React from "react";
import "./footer.css";
import footer from "../images/footerimg.png"

export default function Footer() {
  return (
    <footer className="footerparent">
      <div className="footerchil1 d-flex justify-content-between">
        <div className="footerchil1text">
          Join our newsletter to keep up to date with us!
        </div>
        <div className="d-flex" style={{ height: "45px" }}>
          <div
            className="d-flex align-item-center mx-4 p-2"
            style={{ border: "1px solid gray", borderRadius: "100px" }}
          >
            <span className="m-auto text-white material-symbols-outlined">
              person
            </span>
            <input
              type="email"
              className="footerinput bg-transparent border-0 text-white px-2"
              placeholder="Enter your email"
            />
          </div>
          <button
            className="btn btn-light text-dark"
            style={{ borderRadius: "100px" }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="footerchil1 d-flex justify-content-between">
        <div  style={{width:"30%"}}>
        <img src={footer} className="mb-2" style={{width:"155px",height:"60px"}} alt={"ImageApply"}/>
          {/* <h3 className="text-white" ><span style={{fontWeight:"900",fontSize:'31px'}}>विद्या</span><span style={{fontSize:'17px'}}>VERSE</span></h3> */}
          <p className="" style={{color:"rgba(255, 255, 255, 0.8)"}}>VidyaVerse is a one-stop platform for teenagers to explore their passions, learn skills while in school, and become industry ready today. Start your journey today!</p>
        </div>
        <div className="d-flex">
          <ul className="footer-program-ul">
            <li>Company</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Student Ambassador Program</li>
          </ul>
          <ul className="footer-program-ul">
            <li>Our Programs</li>
            <li>Introduction to WEB3</li>
          </ul>
        </div>
      </div>
      <div className="copyWrite-container d-flex justify-content-between" 
      style={{color:"rgba(122, 122, 122, 1)"}}
      >
        <p className="py-0 ">&copy;2023 VidyaVerse</p>
        <ul className="d-flex">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
}
