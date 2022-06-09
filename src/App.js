import './App.css';
import NavBar from './components/NavBar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as React from 'react';
import Home from './pages/Home'
import Products from './pages/Products';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import Cart from './pages/Cart';
import CartProvider from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/productos/:category' element={<Products/>}/>
            <Route path='/producto/:id' element={<Detail/>}/>
            <Route path='/contacto' element={<Contact />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<ErrorPage />}/>  
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}


export default App;
