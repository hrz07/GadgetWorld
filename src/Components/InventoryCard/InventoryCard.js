import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryCard.css'

const InventoryCard = ({ item }) => {
    const { name, img, quantity, description, sold, supplierEmail, supplierName, price, _id } = item
    return (
        <div className='intentoryCardContainer'>
            <img src={img} alt="" />
            <p className='pdName'>{name}</p>
            <p className='pdPrice'>${price}</p>
            <p className='stock'><span>Stock</span>: {quantity}</p>
            <p className='supplier'> <span>Supplier</span>: {supplierName}</p>
            <p className='des'>{description}</p>
            <br />
            <Link to={'/inventory/' + _id} className='detailBtn'>Update</Link>
        </div>
    );
};

export default InventoryCard;