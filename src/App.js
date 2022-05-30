import './App.css';
import NavBar from './components/NavBar.js';
import ItemList from './components/ItemList.js';
import * as React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemList/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
