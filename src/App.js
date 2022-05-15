import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import * as React from 'react';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='item-list'>
        <ItemListContainer title='Producto uno' price ='100' text='lorem'/>
        <ItemListContainer title='Producto dos' price ='200' text='lorem'/>
        <ItemListContainer title='Producto tres' price ='300' text='lorem'/>
        <ItemListContainer title='Producto cuatro' price ='200' text='lorem'/>
      </div>

    </div>
  );
}

export default App;
