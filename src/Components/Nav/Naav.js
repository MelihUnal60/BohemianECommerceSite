import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'; 
import styles from './Navv.module.scss';
import { useSelector } from 'react-redux';

const  Naav = () => {

    const { cart } = useSelector((state) => state.cart)

    const menus = [
        {
            name:'Ana Sayfa',
            id:1,
            path:'/'
        },
        {
            name:'Hakkımızda',
            id:2,
            path:'/'
        },
        {
            name:'Favoriler',
            id:3,
            path:'/'
        },
        {
            name:'İletişim',
            id:4,
            path:'/'
        },

    ]
  return (
    <div>
       <Navbar expand='lg' className={`fixed-top ${styles.navBar}`}>
            <Container>
                <Navbar.Brand>
                    <NavLink to='/' className={`text-uppercase ${styles.navLink}`}>
                    BOHEM SHOP
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScrooll' />
                <Navbar.Collapse id='navbarScrooll'>
                    <Nav className='ms-auto my-2 my-lg-0' style={{maxHeight: '100px' }} navbarScrooll>
                        {
                            menus.map((menu)=>(
                                <NavLink className={`${styles.navLink} ${styles.menuLink}`}
                                 key={menu.id}
                                 to={menu.path}>
                                 {menu.name}
                                </NavLink>
                            ))
                        }

                        <NavLink className={`${styles.navLink} ${styles.cartIcon}`} to='/cart'>
                            <AiOutlineShoppingCart size={23} /> {' '}
                            <div className={styles.cartLength}>
                                <h6>{cart?.length}</h6>
                            </div>
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
       </Navbar>
    </div>
  );
}

export default Naav;