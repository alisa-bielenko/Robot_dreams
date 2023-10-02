import React, { createContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import { Routes, Route } from "react-router-dom";
import CreateProduct from './CreateProduct/CreateProduct';
import Products from './Products/Products';
import './App.css';
import NotFound from './NotFound';

export const NotificationContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  const addNewProduct = (product) => {
    setProducts([...products, product]);
    console.log(products);
  }

  const addProductToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
    console.log(productsInCart); 
  }

  const apiGet = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
    <NotificationContext.Provider value={[products, productsInCart, addProductToCart]}>
    <Header></Header>
      <Routes>
        <Route path='/products' element={<Products addProductToCart={addProductToCart}></Products>}></Route>
        <Route path='/createProduct' element={<CreateProduct addNewProduct={addNewProduct}></CreateProduct>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </NotificationContext.Provider>
    </>
  );
};

export default App;