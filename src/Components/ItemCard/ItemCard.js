import React from 'react';
import './ItemCard.css'

const ItemCard = ({ item, deleteItem }) => {
    const { name, img, quantity, description, sold, supplierEmail, supplierName, price, _id } = item



    return (
        <div className='itemCardContainer'>
            <div className='imgBox'>
                <img src={img} alt="" />
                <div>
                    <h1>{name}</h1>
                    <p className='price'>$ {price}</p>
                </div>
            </div>
            <div className='article'>
                <small>{ description}</small>
                <div className='stockInfo'>
                    <p className='blueBack'>Stock : {quantity}</p>
                    <p className='blueBack'>Sold: { sold}</p>
                    <p className='blueBack'>Suplier : {supplierName}</p>
                </div>
                <button className='deleteBtn' onClick={() => deleteItem(_id)} >Delete</button>
            </div>
        </div>
    );
};

export default ItemCard;