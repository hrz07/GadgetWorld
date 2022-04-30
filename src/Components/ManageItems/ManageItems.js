import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ManageItems.css'

const ManageItems = () => {

  const [items,setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
       .then(data=> setItems(data)) 
  })


  const deleteItem = (id) => {
    console.log(id)
  }


    return (
        <div className='manageItemContainer'>
            {
                items.map(item=> <ItemCard key={item._id} item={item} deleteItem={deleteItem} /> )
           }
        </div>
    );
};

export default ManageItems;