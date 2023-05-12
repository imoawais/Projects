import React from 'react';
import "./SercicesStyles.css";

const Services = () => {
  return (
    <>
    <h1 className="text-center">Our Services</h1>
    <div className="service">
        <div className="card-container">
            <div className="card">
                <h3>Web Designing</h3>
                <span className="bar"></span>
                <p className="text">Beautiful website with an emphasis on usability and search engine friendliness.</p>
            </div>
            <div className="card">
                <h3>Graphic Designing</h3>
                <span className="bar"></span>
                <p className="text">Your brand is essence of your company. Let us make you unforgetable.</p>
            </div>
            <div className="card">
                <h3>Digital Marketing</h3>
                <span className="bar"></span>
                <p className="text">Now that you have a website,let's open the floodgates of traffic and grow your business.</p>
            </div>

            <div className="card">
                <h3>Web Development</h3>
                <span className="bar"></span>
                <p className="text">Code is our canvas, your website is our masterpiece. Let us Deliver top-notch web development solutions 
                                    to fuel your success.</p>
            </div>
            <div className="card">
                <h3>App Development</h3>
                <span className="bar"></span>
                <p className="text">Bring your mobile app to life with engaging design and enhanced functionality to deliver an 
                                   exceptional experience.</p>
            </div>
            <div className="card">
                <h3>SEO</h3>
                <span className="bar"></span>
                <p className="text">Your success is our top-ranking priority. Let's Unlock the power of search with our SEO expertise. 
                                    We provides SEO solutions that connect you to your audience.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services