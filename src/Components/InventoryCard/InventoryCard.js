import React from 'react';
import './InventoryCard.css'

const InventoryCard = ({ item }) => {
    const { name, img, quantity, description, sold, supplierEmail, supplierName, price, _id } = item
    return (
        <div className='intentoryCardContainer'>
            <img src={img} alt="" />
            <p className='pdName'>{name}</p>
            <p className='pdPrice'>${price}</p>
            <p className='stock'>Stock: {quantity}</p>
            <p className='supplier'>Supplier: {supplierName}</p>
            <p className='des'>{description}</p>
            <br />
            <button className='detailBtn'>Details</button>
        </div>
    );
};

export default InventoryCard;