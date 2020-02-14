import React from "react";
import "./SplashCards.css";

const SplashCards = props => {
  return (
    <>
      <div className="splash_cards_container">
        <p className="splash_cards_title">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default SplashCards;
