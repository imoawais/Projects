import "./HeroImageStyles.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt = "IntroImg" />
    </div>
    <div className="content">
        <p>WE</p>
        <h1>TURN TECHNOLOGY INTO BUSINESS VALUES.</h1>
    </div>
  </div>
  );
};

export default HeroImg