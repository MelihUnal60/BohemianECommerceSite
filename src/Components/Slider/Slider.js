import React from 'react';
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import { Button, Carousel, CarouselItem } from 'react-bootstrap';
import styles from './Slider.module.scss';

const Slider = () => {

    const sliderItems = [
        {
            id: 1,
            caption: 'El Yapımı Tabaklar Burada',
            img: img1
        },
        {
            id: 2,
            caption: 'Güncel Ürünler',
            img: img2
        },
        {
            id: 3,
            caption: 'Çok Satanlar',
            img: img3
        }
    ]

  return (
    <div>
        <Carousel fade>
            {
                sliderItems.map((item) => {
                    return(
                        <CarouselItem key={item.id} className={styles.sliderItem}>
                            <img className='d-block w-100' src={item.img} alt='bohem tabaklar' />
                            <Carousel.Caption>
                                <h1 style={{ color: 'aliceblue', fontSize: '48px'}}>
                                    {item.caption}
                                </h1>
                                <p>
                                    Tüm Slaytlar için ortak alan
                                </p>
                                <Button className={styles.sliderBtn}>
                                    <a href='#product-list'>
                                            Daha Fazla İçerik
                                    </a>
                                </Button>
                            </Carousel.Caption>
                        </CarouselItem>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Slider;
