import React from "react";
import './Product.css';

export default function Product(props) {

  return (
    props.products.map((product) =>
      <div className='item'>
        <div><h3>{product.name}</h3></div>
        <p>{product.description}</p>
        <div>{product.price} $</div>
        <img src={product.imageUrl} alt={product.name} />
        <div className="button-add">
        <button type="button" className="btn btn-secondary change-color" onClick={() => {props.addProductToCart(product.name)}}>Add to card</button>
        </div>
      </div>
    )
  );
};
