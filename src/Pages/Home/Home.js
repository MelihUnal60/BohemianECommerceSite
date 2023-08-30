import React from 'react';
import styles from './Home.module.scss';
import ProductList from '../../Components/ProductList/ProductList';
import ProductSlider from '../../Components/Slider/ProductSlider';

const  Home = () => {
  return (
    <div>
      Home
      <ProductSlider />
      <ProductList />
    </div>
  );
}

export default Home;