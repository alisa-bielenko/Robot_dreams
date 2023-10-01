import { useContext } from 'react';
import cart from '../assets/pngwing.com.png';
import './Cart.css';
import { NotificationContext } from '../App';

const Cart = () => {
  const [productsInCart, setProductsInCart] = useContext(NotificationContext);
  return (
    <div className='cart'>
        <img className='cart' src={cart} alt="img-cart"/>
        <span className='counter'>{setProductsInCart.length}</span>
    </div>
  );
};

export default Cart;

