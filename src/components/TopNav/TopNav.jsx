import React from "react";
import "./TopNav.css";
import { AiOutlineFacebook, AiFillYoutube } from "react-icons/ai";

const TopNav = () => {
  return (
    <div className="top_nav_container">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center top_nav ">
          <ul className="d-flex pt-2">
            <li className="nav_item">
              <a className="nav_link" href="#">
                Bdjobs
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">
                Job Seeker Account
              </a>
            </li>
            <li className="nav_item active_link">
              <a className="nav_link" href="#">
                Recruitment Agency / Foreign Employers
              </a>
            </li>
          </ul>
          {/* ---------------- */}
          <div className="d-flex justify-content-between gap-4">
            <div className="social_icon facebook">
              <a href="#">
                <AiOutlineFacebook />
              </a>
            </div>
            <div className="social_icon you_tube">
              <a href="#">
                <AiFillYoutube />
              </a>
            </div>
            <div class="switch">
              <input
                id="language-toggle"
                class="check-toggle check-toggle-round-flat"
                type="checkbox"
              />
              <label for="language-toggle"></label>
              <span class="on">ENG</span>
              <span class="off">বাংলা</span>
            </div>
          </div>
          {/* ------------------------ */}
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
