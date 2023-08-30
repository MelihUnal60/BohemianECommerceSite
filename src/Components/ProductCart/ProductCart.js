import React from 'react';
import styles from './ProductCart.module.scss';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCart = ({product}) => {

  const navigate = useNavigate();

  const title = product.productTitle.slice(0,20)
  {/* slice ile 20den uzun karakter gelirse başlık, sadece ilk 20 karakterini yayınla dedik. */}

  const addProduct = () => {
    //Sepete ürün ekleme operasyonu
    toast.success(`${product?.productTitle.slice(0,20)} sepete eklendi`,{
      autoClose: 2000
    });
  }

  return (
    <div>
      <Card
      style={{ width : '18rem', textAlign: 'center' }}
      className={styles.productCard}>
      <Card.Img onClick={() => navigate(`/products/${product.id}`)}
      variant='top'
      src={product?.productPhoto}
      className={styles.cardImg}/>

      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
        ₺ {product?.productPrice}
        </Card.Text>
        <Button onClick={addProduct()} className={styles.commonBtn}>SEPETE EKLE</Button>
      </Card.Body>


      </Card>
       
    </div>
  )
}

export default ProductCart;
