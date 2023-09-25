import cart from '../../assets/pngwing.com.png';
import './Cart.css';

const Cart = (props) => {
  return (
    <div className='cart'>
        <img className='img-cart' src={cart} alt="img-basket" />
        <span className='counter'>{props.count}</span>
    </div>
  );
};

export default Cart;
