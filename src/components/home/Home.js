import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h2>LOREM IPSUM </h2>
        <div className="home-card-container">
          <div className="home-card">
            <span>Bio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span>Learn more about me</span>
            <Link to="/bio">
              <button className="home-card-button">Take me</button>
            </Link>
          </div>
          <div className="home-card">
            <span>Portfolio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span>Learn more about me</span>
            <Link to="/portfolio">
              <button className="home-card-button">Take me</button>
            </Link>
          </div>
          <div className="home-card">
            <span>Experience</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span>Learn more about me</span>
            <Link to="/experience">
              <button className="home-card-button">Take me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
