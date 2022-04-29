import React from 'react';
import img from '../../images/man.png'
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='banner'>
                <div className='bannerText'>
                    <h4>Trade-In Offer</h4>
                    <h3>Supper Value Deals</h3>
                    <h1>On All Products</h1>
                    <button>SHOP NOW  ➔</button>
                </div>
                <div className='imgSection'>
                    <img src={img} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;