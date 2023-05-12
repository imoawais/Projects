import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactForm from "../components/ContactForm"


const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat." />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default contact