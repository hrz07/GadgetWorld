import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ItemCard from '../ItemCard/ItemCard';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])


    const Email = user?.email
    useEffect(() => {
        fetch(`http://localhost:4000/items/?email=${Email}`)
            .then(res => res.json())
            .then(data=> setMyItems(data))
    },[myItems])



    const deleteItem = (id) => {
        const url = `http://localhost:4000/item/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const restItem = myItems.filter(item => item._id != id)
                    setMyItems(restItem);
                }
            })
    
      }


    return (
        <div className='myItemContainer'>
            {
                myItems.map(item=> <ItemCard key={item._id} item={item} deleteItem={deleteItem} /> )
            }
        </div>
    );
};

export default MyItems;