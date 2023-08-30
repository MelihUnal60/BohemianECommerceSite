import React from 'react';
import styles from './ProductCart.module.scss';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({product}) => {

  const navigate = useNavigate();

  return (
    <div>
      <Card
      style={{ width : '18rem', textAlign: 'center' }}
      className={styles.productCard}>
      <Card.Img onClick={() => navigate(`/products/${product.id}`)}
      variant='top'
      src={product?.productPhoto}
      className={styles.cardImg}/>

      </Card>
       
    </div>
  )
}

export default ProductCart;
