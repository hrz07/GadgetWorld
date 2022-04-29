import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const valEmail = emailRegex.test(e.target.value);

        if (valEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Envalid Email" });
            setUserInfo({ ...userInfo, email: "" })
        }
    }


    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const valPassword = passwordRegex.test(e.target.value);

        if (valPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters" })
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }


    return (
        <div className='login-container'>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <p className='title'>Login</p>
                    <br />
                    <input type="email" placeholder='Your Email' onChange={handleEmail} required />
                    <br />
                    <input type="password" placeholder='Password' onChange={handlePassword} required />
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
                <button className='googleBtn' onClick={()=>signInWithGoogle()} > <FcGoogle className='googleIcon' size={18} /> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;