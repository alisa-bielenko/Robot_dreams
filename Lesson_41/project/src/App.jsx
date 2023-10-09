import Header from './Header/Header';
import CreateProduct from './CreateProduct/CreateProduct';
import Products from './Products/Products';
import NotFound from './NotFound';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/createProduct' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
};

export default App;