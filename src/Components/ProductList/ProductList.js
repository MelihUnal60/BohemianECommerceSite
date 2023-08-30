import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ProductCart from '../ProductCart/ProductCart';
import { BiSearch} from 'react-icons/bi';

function ProductList() {

  const [products, setProducts] = useState([]);
  // oop tarafında encapsulation denir
  
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

  const [showSearch, setShowSearch] = useState(false);  //setShowSearch ve setSearchValue fonksiyon
  const [searchValue, setSearchValue] = useState('');  //inputtaki her değişimde searchValue, setSearchValue tarafından güncellenir.


  return (
    <div className={styles.productListWrapper} id='product-list'>
      <Container>
        <div className={styles.searchWrapper}>
          <div>
            <h3>
              Alışverişe Başla 
            </h3>
            <p>
              Ürünler
            </p>
          </div>
          <div>
            {
              showSearch && (
                <input type='text'
                       className={styles.searchBar}
                       value={searchValue}
                       onChange={(e) => setSearchValue(e.target.value)} />
              )
            }
            <BiSearch size={25} 
                      style = {{cursor:'pointer'}} 
                      onClick = {() => setShowSearch(!showSearch)} /> 
            {/* !showSeacrh yapma sebebimiz tıklandığında false ise true göndersin ve input açılsın. */}
          </div>
        </div>
        
        <div className={styles.productList}>
          {
            products
            ?.filter((item) => item.productTitle.toLowerCase().includes(searchValue.toLowerCase()) 
            )
            ?.map((product) =>{
              return <ProductCart key={product?.id} product={product} />
            })
          }
        </div>
      </Container>
    </div>
  );
  
}

export default ProductList;