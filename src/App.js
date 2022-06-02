import './App.css';
import NavBar from './components/NavBar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as React from 'react';
import Home from './pages/Home'
import Products from './pages/Products';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/productos/:category' element={<Products/>}/>
          <Route path='/producto/:id' element={<Detail/>}/>
          <Route path='/contacto' element={<Contact />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<ErrorPage />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
