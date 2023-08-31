import React from 'react';
import styles from './Error.module.scss';
import notfound from '../../assets/notfound.png';

const  Error = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center pt-5 ${styles.errorPage} `}>
        <img src={notfound} alt='noy found' />
    </div>
  );
}

export default Error;