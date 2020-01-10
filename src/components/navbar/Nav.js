import React from "react";
import homeIcon from "../../assets/images/iconfinder_home_1954547.png";
import ghIcon from "../../assets/images/iconfinder_github_social_media_logo_1221583.png";
import liIcon from "../../assets/images/iconfinder_online_social_media_linked_in_734383.png";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-content-container">
          <span className="nav-name">Andy Roush</span>
          <Link to="/">
            <span>
              <img src={homeIcon} alt="home" className="nav-home-image" />
            </span>
          </Link>
          <div className="nav-social-icon-container">
            <a
              href="https://www.linkedin.com/in/andyroush/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-padding"
            >
              <img src={liIcon} alt="linkedin" className="nav-home-image" />
            </a>
            <a
              href="https://github.com/AndyRoush"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ghIcon} alt="github" className="nav-home-image" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
