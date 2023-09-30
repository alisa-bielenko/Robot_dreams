import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='content-header'>
        <div className='contact'>
        <p>Beretty Str., 15, </p> 
        <p>Kyiv, Ukraine</p>
        <p>INTERNET STORE</p>
        </div>
        <img className='img-size' src="https://img.freepik.com/darmowe-wektory/szablon-logo-klubu-spa-kwiat-zloty-nowoczesny-design-wektor_53876-136293.jpg" alt="logo"></img>
        <div>
          <Cart></Cart>
        </div>
      </div>
      <div className='header-menu'>
        <span className='menu-page'>
          <Link to='/Products'>List of Products</Link>
        </span>
        <span className='menu-page'>
          <Link to='/CreateProduct'>Add New Product</Link>
        </span>
      </div>
    </div>
  );
};