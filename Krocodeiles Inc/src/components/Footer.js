import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <span className="line"></span>
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <div className="address">
                    <FaHome size={20} style = {{color: "white", marginRight: "2rem" }} />
                        <p>Gulberg III, Lahore</p>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style = {{color: "white", marginRight: "2rem" }} />
                        +92-306-5351-603</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style = {{color: "white", marginRight: "2rem" }} />
                        info@krocodeiles.com</h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="Krocodeile.png" width={560} height={190}></img>
                <p>krocodeiles, Your partner for custom software development and innovation. We develop the code that drives your vision 
                    forward. We're providing solutions in building software that empowers your business to succeed.</p>
                    <br/>
                <div className="social">
                <FaFacebook size={30} style = {{color: "white", marginRight: "1rem" }} />
                <FaLinkedinIn size={30} style = {{color: "white", marginRight: "1rem" }} />
                </div>
            </div>
            <div className="copy-rights">
                <p>Copyright @ 2023 krocodeiles - All Rights Reserved</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer