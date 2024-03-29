import "./NavbarStyles.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >=100){
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <img src="KROCODEILES.png" width={182} height={194} alt="logo"/>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style = {{color: "white"} } />
            ) : (
            <FaBars size={20} style = {{color: "white"} } />
            )}    
        </div>
    </div>
  );
};

export default NavBar