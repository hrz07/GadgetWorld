import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const valEmail = emailRegex.test(e.target.value);

        if (valEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };

    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const valPassword = passwordRegex.test(e.target.value);

        if (valPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };
    



    return (
        <div className='signup-Container'>
            
            <div className="form">
                <form>
                    <p className='title'>Create an Account</p>
                    <br />
                    <input type="email" placeholder='Your Email' onChange={handleEmail} required />
                    {errors?.email && <p className='error_msg' >{errors.email}</p>}
                    <br />
                    <input type="password" placeholder='Password' onChange={handlePassword} required />
                    {errors?.password && <p className='error_msg' >{errors.password}</p>}
                    <br />
                    <input type="password" placeholder='Confirm Password' onChange={handleConfirmPassword} required />
                    {errors?.password && <p className='error_msg' >{errors.password}</p>}
                    <br />
                    <p className='reg-text'>already have account ? <NavLink to='/login' className='resgiterText'>login</NavLink> </p>
                    <button className='regBtn' type="submit">REGISTER</button>
                    <br />
                </form>

            </div>
        </div>
    );
};

export default SignUp;