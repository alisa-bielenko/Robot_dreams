import React, {useState} from "react";
import './Product.css';
import { useContext } from "react";
import { NotificationContext } from "../App";

export default function Product(props) {
  const [products, setProducts] = useContext(NotificationContext);
  return (
    products.map((product) =>
      <div className='item'>
        <div className="product-name">{product.title}</div>
        <div>{product.price} $</div>
        <img src={product.thumbnail} alt={product.title}/>
        <div>
        <button type="button" className="btn btn-secondary button-color" onClick={() => {props.addProductToCart(product.title)}}>Add to Cart</button>
        </div>
      </div>
    )
  );
};