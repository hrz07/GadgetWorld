import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ItemCard from '../ItemCard/ItemCard';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])


    const email = user?.email
    useEffect(() => {
        fetch(`https://fast-shelf-20550.herokuapp.com/item/?email=${email}`, {
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data=> setMyItems(data))
    },[myItems,user,email])



    const deleteItem = (id) => {
        const url = `https://fast-shelf-20550.herokuapp.com/item/${id}`
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
                myItems.length<1 ? <h1>You dont added any product yet</h1> :
                myItems?.map(item=> <ItemCard key={item._id} item={item} deleteItem={deleteItem} /> )
            }
        </div>
    );
};

export default MyItems;