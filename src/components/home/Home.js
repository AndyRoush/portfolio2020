import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h2>WELCOME</h2>
        <p>
          Why such a simple site you ask? I'm a minimalist. I like clean lines
          and getting information accross with the least amount of fluff. See
          below if you're interested to learn more about me :)
        </p>
        <div className="home-card-container">
          <div className="home-card">
            <span>Bio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span>Check out my story, hobbies and interests!</span>
            <Link to="/bio">
              <button className="home-card-button">Learn More</button>
            </Link>
          </div>
          <div className="home-card">
            <span>Portfolio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span>See what I've done.</span>
            <Link to="/portfolio">
              <button className="home-card-button">Show Me</button>
            </Link>
          </div>
          <div className="home-card">
            <span>Experience</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span>I discuss technologies here</span>
            <Link to="/experience">
              <button className="home-card-button">I want to know</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
