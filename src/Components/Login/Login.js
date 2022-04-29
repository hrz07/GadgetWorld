import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div className="form">
                <form>
                    <p className='title'>Login</p>
                    <br />
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <p className='reg-text'>new to track ? <NavLink to='/register' className='resgiterText'>register now</NavLink> </p>
                    <button className='loginBtn' type="submit">LOG IN</button>
                    <br />
                </form>
                <div className='forget'>
                    <p className='forgetText'> forget password ?</p> <button className='resetbtn' >Reset Password</button>
                </div>

                <div className='or'>
                <div></div>
                <p>or</p>
                <div></div>
                </div>
                <button className='googleBtn' > <FcGoogle className='googleIcon' size={18} /> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;