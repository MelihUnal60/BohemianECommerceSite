import React from 'react';
import styles from './Home.module.scss';
import ProductList from '../../Components/ProductList/ProductList';
import Slider from '../../Components/Slider/Slider';

const  Home = () => {
  return (
    <div className={styles.mainWrapper}>
     
      <Slider />
      <ProductList />
    </div>
  );
}

export default Home;