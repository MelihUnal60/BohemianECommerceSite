import React from 'react';
import styles from './Home.module.scss';
import ProductList from '../../Components/ProductList/ProductList';

const  Home = () => {
  return (
    <div>
      Home
      <ProductList />
    </div>
  );
}

export default Home;