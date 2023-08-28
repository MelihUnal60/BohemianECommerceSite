import { Route, Routes} from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Cart from '../src/Pages/Cart/Cart';
import WishList from '../src/Pages/WishList/WishList';
import Error from '../src/Pages/Error/Error';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Naav from './Components/Nav/Naav';
import Contact from './Pages/Contact/Contact';
import './App.scss';
import  Footer  from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <div className='App'>
        <Naav />
          <div className='main'>
            <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/about' element = {<About />} />
              <Route path='/cart' element = {<Cart />} />
              <Route path='/wishlist' element = {<WishList />} />
              <Route path='/*' element = {<Error />} />
              <Route path='/products/:id' element = {<ProductDetail />} />
              <Route path='/contact' element = {<Contact />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
