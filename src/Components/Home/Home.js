import React, { useEffect, useState } from 'react';
import img from '../../images/man.png'
import InventoryCard from '../InventoryCard/InventoryCard';
import './Home.css';

const Home = () => {

    const [items,setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
       .then(data=> setItems(data)) 
  },[items])




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

            <section className='inventory'>
                {
                    items.map(item=> <InventoryCard  key={item._id} item={item} /> )
                }
            </section>
        </div>
    );
};

export default Home;