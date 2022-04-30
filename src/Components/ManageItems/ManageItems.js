import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ManageItems.css'

const ManageItems = () => {

  const [items,setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
       .then(data=> setItems(data)) 
  },[items])


  const deleteItem = (id) => {
    const url = `http://localhost:4000/item/${id}`
    fetch(url, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const restItem = items.filter(item => item._id != id)
                setItems(restItem);
            }
        })

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