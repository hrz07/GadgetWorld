import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdatePage.css'

const UpdatePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])



    return (
        <div className='itemUpdateBox'>
            <div className='updatePageContainer'>
                <img src={item.img} alt="" />
                <div className='productInfoBox'>
                    <p className='name'>{item.name}</p>
                    <div className='suplierInfoBox'>
                        <p className='price'>${item.price}</p>
                        <p className='stock'> <span >Stock:</span> {item.quantity}</p>
                        <p className='suplierName'><span >Suplier:</span> {item.supplierName}</p>
                        <p className='supplierEmail'><span >Suplier-Email:</span> {item.supplierEmail}</p>
                        <p className='des'>{item.description}</p>
                        <div className='btnBox'>
                            <button className='deliverBtn'>Deliver</button>
                            <div className='updateBox'>
                                <input type="number" />
                                <button className='restockBtn'>Restock</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default UpdatePage;