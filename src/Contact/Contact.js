import React from "react";
import './Contact.css'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import gloab from "../images/TICKER.png";

const Contact = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Navbar />

      <section className="d-flex mt-2 contact-section" >
        <div className="p-4 col-md-6" >
          <h1 className="contact-title">Get in <span className="contact-subtitle">Touch</span></h1>
          <img className="gloab-img bg-dark" src={gloab} alt="Gloab Image" />
        </div>

        <div className="col-md-6 p-2" >
          <form className=" contact-form mt-5" autoComplete="off">
            <div className="contact-input-group">
              <label className="contact-input-group__label" htmlFor="myInput"> Name *</label>
              <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your name here..." />
            </div>
            <div className="contact-input-group">
              <label className="contact-input-group__label" htmlFor="myInput"> Email id *</label>
              <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your email id here..." />
            </div>
            <div className="contact-input-group">
              <label className="contact-input-group__label" htmlFor="myInput"> Mobile Number *</label>
              <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your mobile number here..." />
            </div>
            <div className="contact-input-group">
              <label className="contact-input-group__label" htmlFor="myInput"> Subject *</label>
              <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your subject here..." />
            </div>
            <div className="contact-input-group">
              <label className="contact-input-group__label" htmlFor="message"> Message</label>
              <textarea className="contact-input-group__input contact-message" id="message"  placeholder="Enter your message here..."></textarea>
            </div>
         
            <button type="submit" className=" contact-btn w-100"> Submit </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
