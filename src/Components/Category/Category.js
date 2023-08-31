import React from 'react';
import img1 from '../../assets/cat1.webp';
import img2 from '../../assets/cat2.webp';
import img3 from '../../assets/cat3.webp';
import img4 from '../../assets/cat4.webp';
import styles from './Category.module.scss';

const Category = () => {



    const categories = [
        {
            img: img1,
            name: 'Kağıt İpten Tabaklar',
            id: 1
        },
        {
            img: img2,
            name: 'Kalın kasnaklılar',
            id: 2
        },
        {
            img: img3,
            name: 'İnce kasnaklılar',
            id: 3
        },
        {
            img: img4,
            name: 'Renkliler',
            id: 4
        }
    ]

    const gradientColor = 'rgba(20, 20, 20, .3)';


   

    return (
        <div className='pt-5 container'>
            <h3 className='py-2'>
                Kategoriye Göre Alışveriş
            </h3>
            <div className={styles.categoryWrapper}>
                {
                    categories.map((category) => {
                        return (

                            <div key={category.id}>
                                <div className='category'
                                    style={{
                                        background: `linear-gradient(${gradientColor}, ${gradientColor}), url(${category.img}) no-repeat`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    <h5 className='text-white px-3'>{category.name.toUpperCase()}</h5>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category;