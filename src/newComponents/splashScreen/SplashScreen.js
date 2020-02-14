import React from "react";
import "./SplashScreen.css";
import jsonTest from "../../test.json";
import Cards from "../splashCards/SplashCards";
import smImg from "../../assets/images/iconfinder_linkedin_social_media_online_1940923.png"

console.log(jsonTest);

// let testFile = require('../../../src/test.json')
// console.log(testFile[0].userName)

const infoArray = jsonTest.map(items => {
  return (
    <>
      <Cards
        key={items.title}
        title={items.title}
        description={items.description}
      />
    </>
  );
});

const SplashScreen = () => {
  return (
    <>
      <div className="splash_container">
        <div className="splash_main_wrapper">
          <div className="splash_intro_text">
            <p>LOREM</p>
          </div>
          <div className="splash_sm_wrapper">
            <img src={smImg} alt="social media" />
            <img src={smImg} alt="social media" />
            <img src={smImg} alt="social media" />
            <img src={smImg} alt="social media" />
          </div>
          <div className="splash_link_grid_container">{infoArray}</div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
