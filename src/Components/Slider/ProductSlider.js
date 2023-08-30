import React, { useLayoutEffect, useState, useEffect } from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import ProductCard from '../../Components/ProductCart/ProductCart';
import axios from 'axios';


//propstan içeri category değerini aldık.

const ProductSlider = ({ category }) => {

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

  const [size, setSize] = useState('');

  useLayoutEffect(() =>{
        function updateSize(){
            setSize(window.innerWidth); //tarayıcı penceresinin genişliğine göre düzenleme, setSize ile size değerine atadık genişliği
        }
        window.addEventListener('resize', updateSize); //tarayıcı boyut değiştiğinde updateSize çalışacak.
        updateSize(); //ilk çalıştığında da güncel değeri alsın
        return () => window.removeEventListener('resize', updateSize); //tekrar render edilmeden önce eventlistener kapatılır.silmezsek bir çok eventlistener eklenmiş olur aynı metoddan 100lerce çalışır
  });

  return (
    <div className='container py-3'>
        <ReactElasticCarousel itemsToShow={size <= 767 ? 1 : 3}>
            {products.map((item) => {
            return <ProductCard product={item} key={item.id} />
    })}
        </ReactElasticCarousel>
    </div>
  )
}

export default ProductSlider;