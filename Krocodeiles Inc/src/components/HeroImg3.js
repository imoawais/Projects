import React from 'react'
import IntroImg from '../assets/intro-bg2.jpg'
import './HeroImg3Styles.css'
import { Link } from "react-router-dom";

const HeroImg3 = () => {
  return (
    <div className="hero1">
    <div className="mask1">
        <img className="intro-img3" src={IntroImg} alt = "IntroImg" />
    <div className="content1">
        <h1>Willing to Work with us?</h1>
        <br/>
        <br/>
        <div>
            <Link to="/contact" className="btn">Let's Talk</Link>
        </div>
    </div>
    </div>
  </div>
  )
}

export default HeroImg3