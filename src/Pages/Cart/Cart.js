import React from 'react'
import styles from './Cart.module.scss';
import ProductList from '../../Components/ProductList/ProductList';

const  Cart = () => {
  return (
    <div>
      Cart
      <ProductList />
    </div>
    
  );
}

export default Cart;