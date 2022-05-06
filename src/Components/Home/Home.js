import React, { useEffect, useState } from 'react';
import img from '../../images/man.png';
import {Link} from 'react-router-dom'
import InventoryCard from '../InventoryCard/InventoryCard';
import freeDelivery from '../../images/free-delivery.png'
import moneyBack from '../../images/cash-back.png'
import safePayment from '../../images/secure-payment.png'
import loyality from '../../images/loyalty.png'
import './Home.css';

const Home = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])




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
            <section className='serviceBox'>
                <div className='service'> 
                    <img src={freeDelivery} alt="" />
                    <h3>FREE SHIPPING</h3>
                    <p>Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!</p>
                </div>
                <div className='service'>
                    <img src={moneyBack} alt="" />
                    <h3>30 DAYS MONEY BACK</h3>
                    <p>100% satisfaction guaranteed, or get your money back within 30 days!!
                    </p>
                </div>
                <div className='service'>
                    <img src={safePayment} alt="" />
                    <h3>SAFE PAYMENT</h3>
                    <p>Pay with the world’s most popular and secure payment methods.</p>
                </div>
                <div className='service'>
                    <img src={loyality} alt="" />
                    <h3>LOYALTY CUSTOMER</h3>
                    <p>Card for the other 30% of their purchases at a rate of 1% cash back.</p>
                </div>
            </section>
            <h1 className='inventoryTitle'>Top Products</h1>
            
                <section className='inventory'>
                    {
                        items.map(item => <InventoryCard key={item._id} item={item} />)
                    }
            </section>
            <div className='allItemBtndiv'>
                <Link className='seeAllItems' to='/manageitems'>See All products</Link>
            </div>

            <section className='topSellers'>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </section>
        </div>
    );
};

export default Home;