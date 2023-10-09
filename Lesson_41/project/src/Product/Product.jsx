import './Product.css';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/productsSlice';

export default function Product(props) {
  const dispatch = useDispatch();

  return (
    props.products.map((product) =>
      <div className='item' key={product.id}>
        <div className='product-name'>{product.title}</div>
        <div>{product.price} $</div>
        <img src={product.thumbnail} alt={product.title}/>
        <div>
        <button type="button" className="btn btn-secondary button-color" onClick={() => dispatch(addProductToCart(product.title))}>Add to Cart</button>
        </div>
      </div>
    )
  );
};