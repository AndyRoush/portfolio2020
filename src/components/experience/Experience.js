import React from "react";
import "./Experience.css";
import NavButtonHolder from "../navButtonHolder/NavButtonHolder";

const Experience = props => {
  return (
    <>
      <NavButtonHolder leftButton="bio" rightButton="portfolio" />
      <div className="experience-container">
        <p className="exp-center line-height">
          This page is dedicated to the technologies I currently work with. I'm
          in the MERN stack space, and I love it but am always excited and eager
          to learn new technologies. My hope is to expand this list every year!
        </p>
        <div className="exp-content-main-wrapper">
          <div className="exp-wrapper">
            <div className="exp-header">
              <p>Proficient Technologies:</p>
            </div>
            <div className="exp-prof-content">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Redux</li>
                <li>Axios</li>
                <li>GIT</li>
                <li>JSON</li>
                <li>REST API</li>
              </ul>
            </div>
          </div>
          <div className="exp-wrapper">
            <div className="exp-header">
              <p>Familiarity With:</p>
            </div>
            <div className="exp-fam-content">
              <ul>
                <li>Node</li>
                <li>SQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div className="exp-wrapper">
            <div className="exp-header">
              <p>Experience With:</p>
            </div>
            <div className="exp-with-content">
              <ul>
                <li>Product conceptualization.</li>
                <li>Fetching data.</li>
                <li>Build tools & continuing integration.</li>
                <li>Versioning and deployment.</li>
                <li>Responsive Design.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
