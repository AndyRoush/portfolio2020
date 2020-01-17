import React from "react";
import { Link } from "react-router-dom";
import mernStack from "../../assets/images/mern.png"
import codeBracket from "../../assets/images/codeBracket.png"
// import n64 from "../../assets/images/n64.png"
// import n64 from "../../assets/images/n64buttons.svg"
// import n64 from "../../assets/images/startButton.svg"
import snes from "../../assets/images/snesButtons.png"

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h2>WELCOME!</h2>
        <p className="margins line-height">
          Thanks for stopping by! My name is Andy Roush and I'm a JavaScript
          developer living in Southern California. As you can tell by my website I'm a
          minimalist. I like simplistic design and clean lines while conveying
          information with the least amount of clutter. See below if you're
          interested to learn more about me :)
        </p>
        <div className="home-card-container">
          <div className="home-card">
            <span className="uppercase">Bio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src={snes}
            />
            <span className="home-card-span">
              Check out my story, hobbies and interests!
            </span>
            <Link to="/bio">
              <button className="home-card-button-bottom">Learn More</button>
            </Link>
          </div>
          <div className="home-card">
            <span className="uppercase">Portfolio</span>
            <img
              className="home-card-img"
              alt="headshot"
              src={codeBracket}
            />
            <span className="home-card-span">See my work.</span>
            <Link to="/portfolio">
              <button className="home-card-button-bottom">Show Me</button>
            </Link>
          </div>
          <div className="home-card">
            <span className="uppercase">Experience</span>
            <img
              className="home-card-img"
              alt="headshot"
              src={mernStack}
            />
            <span className="home-card-span">What technologies do I use?</span>
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
