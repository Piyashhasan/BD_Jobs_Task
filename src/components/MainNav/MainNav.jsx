import React from "react";
import "./MainNav.css";
import logo from "../../assets/logo_bdesh.svg";
import jointVeture from "../../assets/Joint_venture.png";
import { BsFillTelephoneFill } from "react-icons/bs";

const MainNav = () => {
  return (
    <div className="container main_nav d-flex justify-content-between align-items-center">
      <div className="logo">
        <img src={logo} alt="logo" className="w-75 img-fluid" />
      </div>
      <div className="joint-venture">
        <img src={jointVeture} alt="jointVeture" className="img-fluid" />
      </div>
      <div className="button d-flex align-items-center">
        <div className="dropdown mx-5">
          <a
            className="dropdown-toggle text-decoration-none"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Md Piyash Hasan
          </a>
          <ul
            className="dropdown-menu py-3 px-5"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                View Resume
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Edit Resume
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Applied Jobs
              </a>
            </li>
            <li className="mt-4 border-top">
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
        <div className="contact mx-5">
          <a href="#">
            <BsFillTelephoneFill />
          </a>
          <span className="mx-3">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
