import React from "react";
import "./Footer.css";
import googlePlay from "../../assets/footer/google-play-badge.svg";
import call from "../../assets/footer/call.jpg";

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container d-flex justify-content-between  mt-5">
        <div>
          <h3 className="fw-bold">About</h3>
          <ul className="p-0">
            <li>
              <a href="">About Website</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fw-bold">Job Seekers</h3>
          <ul className="p-0">
            <li>
              <a href="">Create Account</a>
            </li>
            <li>
              <a href="">Career Counseling</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fw-bold">Employers</h3>
          <ul className="p-0">
            <li>
              <a href="">Create Account</a>
            </li>
            <li>
              <a href="">Products/Service</a>
            </li>
            <li>
              <a href="">Post a Job</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fw-bold">Tools & Social Media</h3>
          <ul className="p-0">
            <li>
              <a href="">Download Mobile App</a>
            </li>
            <li>
              <a href="">
                <img src={googlePlay} alt="google play" className="img-fluid mt-2" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fw-bold">Contact Us</h3>
          <ul className="p-0">
            <li>
              <a href="">Have any job query ?</a>
            </li>
            <li>
              <a href=""><img src={call} alt="call" className="img-fluid mt-2"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
