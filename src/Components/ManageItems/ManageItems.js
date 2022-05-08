import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { Link } from 'react-router-dom'
import './ManageItems.css'

const ManageItems = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])


    const deleteItem = (id) => {

        const confirm = window.confirm('are you want to delete ?')
        if (confirm) {
            const url = `http://localhost:4000/item/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restItem = items.filter(item => item._id !== id)
                        setItems(restItem);
                    }
                })
        }
    }


    return (
        <div>
            <h1 className='manageAllItemsTitle'>Manage All Products</h1>
            <div className='manageItemContainer'>
                {
                    items.map(item => <ItemCard key={item._id} item={item} deleteItem={deleteItem} />)

                }
            </div>
            <div className='addItemBtnBox'>
                <Link className='addItemBtn' to='/additems'>Add a new product</Link>
            </div>
        </div>

    );
};

export default ManageItems;