import React from "react";
import "./portfolioCards.css";

const PortfolioCards = props => {
  return (
    <>
      <div className="cards-wrapper">
        <div className="cards-img-wrapper">
          <img src={props.img} alt="projectimg" className="cards-img" />
        </div>
        <div className="cards-content-wrapper">
          <p className="cards-font-size">
            <span className="cards-title">site: </span>
            <span>{props.website}</span>
          </p>
          <p className="cards-font-size">
            <span className="cards-title">tech: </span>
            <span>{props.tech}</span>
          </p>
          <p className="cards-font-size">
            <span className="cards-title">description: </span>
            <span>{props.desc}</span>
          </p>
          <p className="cards-font-size">
            {props.liveLink != null ? (
              <a
                href={props.liveLink}
                className="cards-live-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                live link
              </a>
            ) : null}
            {(props.liveLink != null && props.ghLink === null) ||
            (props.ghLink != null && props.liveLink === null) ? null : (
              <span>|</span>
            )}
            {props.ghLink != null ? (
              <a
                href={props.ghLink}
                className="cards-gh-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            ) : null}
          </p>
          {/* <p className="cards-font-size">
          <a href={props.ghLink}>Github Link</a>
        </p> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioCards;
