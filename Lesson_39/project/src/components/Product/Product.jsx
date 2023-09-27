import React, {useState} from "react";
import './Product.css';

export default function Product(props) {

  return (
    props.products.map((product) =>
      <div className='item'>
        <div className="item-title">{product.title}</div>
        <div>Price: {product.price} $</div>
        <div>Discount: {product.discountPercentage} $</div>
        <img src={product.thumbnail} alt={product.title} />
        <div>
        <button type="button" className="btn btn-secondary button-color" onClick={() => {props.addProductToCart(product.title)}}>Add to Cart</button>
        </div>
      </div>
    )
  );
};
