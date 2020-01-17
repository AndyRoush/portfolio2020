import React from "react";
import "./Experience.css";
import NavButtonHolder from "../navButtonHolder/NavButtonHolder";

const Experience = props => {
  return (
    <>
      <NavButtonHolder leftButton="Bio" rightButton="Portfolio" />
      <p className="line-height exp-header-text">
        This page is dedicated to the technologies I currently work with or have
        worked with in the past. Right now I'm on the front end of the MERN
        stack, and I love it but am always excited and eager to learn something
        new. My hope is to expand this list every year!
      </p>
      <div className="experience-container">
        <div className="exp-content-main-wrapper">
          <div className="exp-wrapper">
            <div className="exp-header">
              <p>Proficient Technologies:</p>
            </div>
            <div className="exp-prof-content">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Flexbox</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Redux</li>
                <li>Axios</li>
                <li>Node + NPM</li>
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
                <li>Modern browser technologies.</li>
                <li>Product conceptualization.</li>
                <li>Build tools & continuing integration.</li>
                <li>Versioning and deployment.</li>
                <li>
                  Collaborations with Systems Architect, Creative and Product
                  Management teams to design and develop website user
                  experience.
                </li>
                <li>
                  Translating business requirements into technical requirements
                  and advise product team on UI guidelines and technical
                  feasibilities.
                </li>
                <li>
                  Developing, Supporting and maintaining new interactive and
                  responsive applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
