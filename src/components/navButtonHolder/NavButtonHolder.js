import React from "react";
import "./NavButtonHolder.css";
import { Link } from "react-router-dom";

const NavButtonHolder = props => {
  return (
    <>
      <div className="nbh-button-holder">
        <div className="nbh-button-container">
          <Link to={`/${props.leftButton}`}>
            <button className="home-card-button">{props.leftButton}</button>
          </Link>
          <Link to={`/${props.rightButton}`}>
            <button className="home-card-button">{props.rightButton}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavButtonHolder;
