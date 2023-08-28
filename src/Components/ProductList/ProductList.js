import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ProductCart from '../ProductCart/ProductCart';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Sunucudan ürün verilerini çekmek için API isteği
    axios.get('https://localhost:7155/product')
      .then(response => {
        console.log(response);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.productListWrapper} id='product-list'>
      <Container>
        <div className={styles.searchWrapper}>

        </div>
        <div className={styles.productList}>
          {
            products?.map((product) =>{
              return <ProductCart key={product?.id} product={product} />
            })
          }
        </div>
      </Container>
    </div>
  );
  
}

export default ProductList;