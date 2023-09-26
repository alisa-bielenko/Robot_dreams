import Cart from '../Cart/Cart';
import './Header.css';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='cap'>
        <h2>THE BEST SPA-SALON</h2>
        <img className='img-size' src="https://img.freepik.com/darmowe-wektory/szablon-logo-klubu-spa-kwiat-zloty-nowoczesny-design-wektor_53876-136293.jpg" alt="logo"></img>
        <p>Beretty Str., 15, Kyiv, Ukraine, <br /> 02222 <br />Mon - Fri: 10:00 - 20:00 <br />Sat - Sun: 12:00 - 20:00</p>
        <div>
          <Cart count={props.count}></Cart>
        </div>
      </div>
    </div>
  );
};
