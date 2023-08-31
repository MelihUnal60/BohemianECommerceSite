import React from 'react';
import styles from './EmptyCart.module.scss';
import emptyCartImg from '../../assets/cart.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EmptyCart = () => {

    const navigate = useNavigate();



  return (
    <div className={styles.container}>
        <div className={styles.emptyCart}>
            <img src={emptyCartImg} alt='boş sepet fotoğrafı' />
            <Button onClick={() => navigate('/')} //sepetten ana sayfaya useNavigate ile yönlendiren buton
                    className='btn btn-secondary'>
                Sepetinize Ürün Eklemek İçin Alışverişe Başlayın
            </Button>
        </div>

    </div>
  )
}

export default EmptyCart;