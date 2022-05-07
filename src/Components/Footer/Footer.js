import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerLogoBox'>
                <h1>Gadget<span>World</span> </h1>
                <small>Copyright © 2022 GadgetWorld</small>

            </div>
            <div>
                <p>About GadgetWorld</p>
                <p>Read our blog</p>
                <p>Sign up to deliver</p>
                <p>Our services</p>
                <p>Pricing</p>
            </div>
            <div>
                <p>Get help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Lets take a tour</p>
                <p>Terms of Use</p>
            </div>
        </div>
    );
};

export default Footer;