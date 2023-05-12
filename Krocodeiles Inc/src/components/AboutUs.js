import React from 'react'
import './AboutUsStyles.css'
import AboutImg from '../assets/about2.jpg'

const AboutUs = () => {
  return (
    <div className='about-container'>
        <div className='masking'>
            <img className='about-img' src={AboutImg} alt="AboutImg"/>
        </div>
            <h1 className='text2'>About Us</h1>
        <div className='text-container'>
            <div className='about-left'>
                <h1>Whe Working For You To Build Your Business Fast</h1>
                <br/>
                <p>Creative. Driven. Insightful. Responsive. These are just a few of the terms clients have used to describe the designers, 
                    developers, and marketers who make up the Krocodeiles team. We’re inspired by your business and motivated by your success. 
                    Let us help your web presence be everything you want it to be.</p>
                <br/>
                <p>We’re able to create anything from complex and dynamic online portals to simplistic brochure sites to promote your brand 
                    and generate inquiries. Whether it’s an online shop or a bespoke booking solution, we pride ourselves on responsive 
                    e-commerce design and development. If You want website design, graphic design, app development, or social media marketing 
                    services at Lowest Prices. You can hire us.</p>
            </div>
            <div className='about-right1'>
                <img src="cover.jpg" width={350} />
            </div>

            <div className='about-left'>
                <h1>Who We Are?</h1>
                <br/>
                <p>We are Specialized in Website Designing, Graphic Designing, Web Development, App Development, SEO and Digital Media 
                    Marketing. We are here to grow your businesses to next level and helping you out in running successful ventures. Work is 
                    our soul Identity. We always put 100% into what we do here and will do our best for you. We have a special relationship 
                    with our customers. we look forward to working with you. Feel free to reach out to us so we can start planning on your 
                    project!</p>
            </div>
            <div className='about-right'>
                <h1>Our Vision</h1>
                <br/>
                <p>To provide professional, full-service SEO, graphic design, web development, app development and website design solutions 
                    to businesses who understand the role and importance of their material.</p>
                <br/>
                <p>If You want website design, graphic design, web & app development or SEO services in Lowest Prices. You can hire us.</p>
            </div>
        </div>
        <h1 className='text2'>Meet The team</h1>
        <div className='team'>
            <div className='team-container'>
                <div className='team-img'>
                    <img src='Owais.png' height={200} alt='Owais'/>
                </div>
                <div className='team-img'>
                    <img src='ahsan.png' height={200} alt='Ahsan'/>
                </div>
                <div className='team-img'>
                    <img src='hassaan.png' height={200} alt='Hassaan'/>
                </div>
            </div>
        </div>
        <h1 className='text2'>Our Values</h1>
        <div className='value'>
            <div className='value-container'>
                <div className='value-img'>
                    <img src='innovation.png' height={200} alt='Innovation' />
                </div>
                <div className='value-img'>
                    <img src='honesty.png' height={200} alt='Honesty' />
                </div>
                <div className='value-img'>
                    <img src='velocity.png' height={200} alt='Velocity' />
                </div>
                <div className='value-img'>
                    <img src='impact.png' height={200} alt='Impact' />
                </div>
                <div className='value-img'>
                    <img src='ownership.png' height={200} alt='Ownership' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs