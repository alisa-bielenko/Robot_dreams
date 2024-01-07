import basket from '../assets/basket.png';
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {
  const product = useSelector(state => state.products.product);
  return (
    <div className='cart'>
        <img className='basket' src={basket} alt='img-basket' />
        <span className='counter'>{product.length}</span>
    </div>
  );
};

export default Cart;

