import React from 'react'
import NavBar from '../components/Navbar';
import HeroImg from '../components/HeroImage';
import Services from '../components/Services';
import Footer from '../components/Footer';
import HeroImg3 from '../components/HeroImg3';
import Technologies from '../components/Technologies';

const home = () => {
  return <div>
    <NavBar/>
    <HeroImg/>
    <Services/>
    <Technologies/>
    <HeroImg3/>
    <Footer/>
  </div>
};

export default home