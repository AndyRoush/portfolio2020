import React from "react";
import homeIcon from "../../assets/images/home.png";
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
            <span>LI</span>
            <span>GH</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
