import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import JupiterSystem from "./JupiterBackground";

const Contact = () => {
  return (
    <div className="main-section contact bg-lightgrey">
      <div className="background">
        <JupiterSystem />
      </div>
      <div className="container">
        <h2 className="heading-text">Get In Touch</h2>
        <div className="width-100">
          <form>
            <input type="text" placeholder="Full Name..." />
            <input type="email" placeholder="Email Id..." />
            <input type="tel" placeholder="Mobile No..." />
            <textarea placeholder="Enter Address..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="width-33">
          <h3>
            <i className="fa fa-map-marker"></i>
          </h3>
          <h4>Address</h4>
          <p>Bnagalore, India</p>
        </div>
        <div className="width-33">
          <h3>
            <i className="fa fa-phone"></i>
          </h3>
          <h4>Phone</h4>
          <p>+91 99 55 388 960</p>
        </div>
        <div className="width-33">
          <h3>
            <i className="fa fa-envelope-o"></i>
          </h3>
          <h4>Email</h4>
          <p>pranavsingh9471@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
