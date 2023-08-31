import React from 'react';
import loading from '../../assets/loader.gif';

const LoaderIcon = () => {
  return (
    <div className='d-flex justify-content-center align-items-center text-center'>
        <img src={loading} alt='loading photo' />
    </div>
  )
}

export default LoaderIcon;