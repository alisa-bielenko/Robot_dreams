import React from 'react';
import './Products.css';
import Product from './Product';

function Products() {
  const products = [

    { id: 1,
      name: 'Massage',
      price: 100,
      description: 'relaxing and sport',
      imageUrl: 'src/img/relaxing.jpg' 
    },
    { id: 2,
      name: 'Sauna',
      price: 150,
      description: 'dry/wet with swimming pool',
      imageUrl: 'src/img/sauna.jpg'
    },
    { id: 3,
      name: 'Cosmetic masks',
      price: 200,
      description: 'for face and body',
      imageUrl: 'src/img/face.jpg' 
    }
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
