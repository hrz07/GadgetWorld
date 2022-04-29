import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <h3>PHONE'<span>mela</span></h3>
            <div className='button-section'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/manage'>Manage Items</NavLink>
                <NavLink to='/additem'>Add Item</NavLink>
                <NavLink to='/myitem'>My items</NavLink>
                <NavLink to='/login'>LogIn</NavLink>
            </div>
        </div>
    );
};

export default Navbar;