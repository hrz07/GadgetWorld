import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='nav-container'>
            <img className='logo' src={logo} />
            <div className='button-section'>
                <NavLink to='/'>Home</NavLink>
                {
                    user ?
                    <>
                        <NavLink to='/manageitems'>Manage Items</NavLink>
                        <NavLink to='/additems'>Add Item</NavLink>
                        <NavLink to='/myitems'>My items</NavLink> 
                        <button className='logOutBtn' onClick={()=>signOut(auth)} >Logout</button>   
                        </>
                        :
                        <NavLink to='/login'>LogIn</NavLink>
                }
                
               
            </div>
        </div>
    );
};

export default Navbar;