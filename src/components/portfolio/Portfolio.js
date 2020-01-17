import React from "react";
import PortfolioCards from "../portfolioCards/PortfolioCards";
import "./Portfolio.css";
import NavButtonHolder from "../navButtonHolder/NavButtonHolder";
import scdImg from "../../assets/images/scdimg.PNG";
import cv2Img from "../../assets/images/cv2.PNG";
import gbImg from "../../assets/images/gbimg.PNG";
import pfImg from "../../assets/images/pfimg.PNG";
import rbImg from "../../assets/images/rbimg.PNG";
import reaImg from "../../assets/images/reaimg.PNG";
import triviaImg from "../../assets/images/triviaimg.PNG";

const projArray = [
  {
    img: scdImg,
    website: "SCDistributors",
    tech: "React, React Router, Bootstrap.",
    desc:
      "React application utilizing React Router and Bootstrap. Elements of animation and SVG.",
    liveLink: "http://scdistributors.com/",
    ghLink: null
  },
  {
    img: cv2Img,
    website: "Cvmissioncriticalreit2",
    tech:
      "React, Bootstrap, Axios, Google Maps, XML and CSV parsing modules to convert to JSON.",
    desc:
      "Single page React application. Fully data driven converting XML and CSV to JSON for a more organized data interchange. Bootstrap for responsive design, and google maps integration.",
    liveLink: "http://www.cvmissioncriticalreit2.com/",
    ghLink: null
  },
  {
    img: gbImg,
    website: "Greenbackerrenewableenergy",
    tech:
      "React, Bootstrap, Axios, Google Maps, XML and CSV parsing modules to convert to JSON.",
    desc:
      "Single page React application. Fully data driven converting XML and CSV to JSON for a more organized data interchange. Bootstrap for responsive design, and google maps integration.",
    liveLink: "http://greenbackerrenewableenergy.com/",
    ghLink: null
  },
  {
    img: pfImg,
    website: "Park Finder",
    tech:
      "HTML, CSS, JavaScript, jQuery, AJAX, Google Maps, National Park API.",
    desc:
      "Code camp project 1. It allows the user to search nation wide for parks either by park name or location. It then populates the parks with markers on a google map with an info window. When you click on that marker it populates all kinds of useful information that is pulled from the National Parks API and displayed below. I worked on the google maps and national parks integration.",
    liveLink: "https://andyroush.github.io/parkfinder/",
    ghLink: "https://github.com/AndyRoush/parkfinder"
  },
  {
    img: rbImg,
    website: "Req.body",
    tech:
      "HTML, CSS, JavaScript, jQuery, Node, Express, MySQL, Google Charts, Materialize.",
    desc:
      "Code camp project 2. Req.body being a play on words from the express framework. Fitness application with a trainer view, and a client view. Allows the trainer to track client progress. Client to receive workout and nutrition info. I designed and built the entire front end.",
    liveLink: null,
    ghLink: "https://github.com/AndyRoush/invisible_pastrami"
  },
  {
    img: reaImg,
    website: "REA Sales Client",
    tech:
      "React, React-CRUD-Table, React-Geocode, React-Router, Google Maps, Redux, Axios, Body-Parser, JSON Web Token, Mongoose, Multer, Bcrypt, Passport, Validator.",
    desc:
      "Code camp project. Full stack, Real-Estate lead generator application. I designed and built the front end.",
    liveLink: null,
    ghLink: "https://github.com/AndyRoush/rea-sales-client"
  },
  {
    img: triviaImg,
    website: "Trivia Game",
    tech: "HTML, CSS, JavaScript, jQuery.",
    desc:
      "Code camp assignment. I love retro 80's synthwave, so I decided to style the app around that. Logo created by me in Photoshop. This app is a basic multiple choice trivia game dictated by a set time limit.",
    liveLink: "https://andyroush.github.io/TriviaGame/",
    ghLink: "https://github.com/AndyRoush/TriviaGame"
  }
];

const Portfolio = props => {
  return (
    <>
      <NavButtonHolder leftButton="Bio" rightButton="Experience" />
      <div className="portfolio-header">
        <p className="line-height">
          Welcome to my portfolio page! Here is a showcase of some of the
          websites I've built in my professional career, as well as
          projects/assignments I've completed over my time at coding bootcamp.
          Unfortunately there are a number of websites I've built I can't show due to legal
          or other reasons. They're mostly either user portals that require login credentials and authenticaion that I no longer have access to, or company intranet applications.
        </p>
      </div>
      <div className="portfolio-container">
        {projArray.map(cards => {
          return (
            <PortfolioCards
              img={cards.img}
              website={cards.website}
              tech={cards.tech}
              desc={cards.desc}
              liveLink={cards.liveLink}
              ghLink={cards.ghLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
