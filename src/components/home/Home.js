import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h2>WELCOME!</h2>
        <p className="margins line-height">
          Thanks for stopping by! My name is Andy Roush and I'm a JavaScript
          developer living in Southern California. Your first impression of my
          website may be, why such a simple design? Well, I'm a
          minimalist. I like simplistic design and clean lines all while getting
          information across with the least amount of fluff. See below if you're
          interested to learn more about me :)
        </p>
        <div className="home-card-container">
          <div className="home-card">
            <span>Bio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span className="home-card-span">
              Check out my story, hobbies and interests!
            </span>
            <Link to="/bio">
              <button className="home-card-button-bottom">Learn More</button>
            </Link>
          </div>
          <div className="home-card">
            <span>Portfolio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span className="home-card-span">See what I've done.</span>
            <Link to="/portfolio">
              <button className="home-card-button-bottom">Show Me</button>
            </Link>
          </div>
          <div className="home-card">
            <span>Experience</span>
            <img
              className="home-card-img"
              alt="headshot"
              src="http://www.minneapolisheadshots.com/gallery/main/environmentalheadshot.jpg"
            />
            <span className="home-card-span">What is my tech stack?</span>
            <Link to="/experience">
              <button className="home-card-button-bottom">I want to know</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
