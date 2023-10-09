import './Products.css';
import Product from '../Product/Product';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductToCart } from '../redux/productsSlice';

export default function Products(props) {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const apiGet = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => dispatch(setProductToCart(data.products)))
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="products">
      <Product products={products}></Product>
    </div>
  );
};