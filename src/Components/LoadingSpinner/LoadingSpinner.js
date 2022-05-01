import React from 'react';
import loading from '../../images/loading.gif'
import './LoadingSpinner.css'
const LoadingSpinner = () => {
    return (
        <div className='spinnerBox'>
            <img src={loading} alt="" />
        </div>
    );
};

export default LoadingSpinner;