import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="divider-footer"></div>
      <div className="footer">
        <div className="section1">
          <div className="logo">
            <h1>
              Best<span>Buddy</span>
            </h1>
          </div>
          <div className="punchline">
            We make your ideal room partner search easy and hassle free.
          </div>
        </div>
        <div className="section2">
          <div className="part1">
            <h5>For Beginners</h5>
            <ul>
              <li>New Account</li>
              <li>Start Booking a Room</li>
              <li>Use Payments</li>
            </ul>
          </div>
          <div className="part2">
            <h5>Explore Us</h5>
            <ul>
              <li>Our Careers</li>
              <li>Privacy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="part3">
            <h5>Connect Us</h5>
            <ul>
              <li>support@bestbuddy.com</li>
              <li>+91-9464861458</li>
              <li>BestBuddy,India</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright 2023 • All rights reserved • BestBuddy
      </div>
    </>
  );
};

export default Footer;
