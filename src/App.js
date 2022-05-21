import './App.css';
import NavBar from './components/NavBar.js';
import ItemList from './components/ItemList';
import * as React from 'react';
import {useState, useEffect} from 'react';
function App() {
  const galletitas = [
    {
      title : 'Chocolate Chips',
      price : 240,
      text : 'Una galleta conocida y aclamada. Una bomba de azúcar y el mejor chocolate para disfrutar todos los días',
      img : 'img/chips.jpg',
      stock: 3,
      id:1,
    },
    {
      title : 'Oreo',
      price : 240,
      text : 'El chocolate y la dulzura de esta conocida marca, sumado con nuestras galletitas, una combinación inmejorable',
      img : 'img/oreo.jpg',
      stock: 5,
      id:2
    },
    {
      title : 'Rocklets',
      price : 240,
      text : 'Para todos aquellos fanáticos del chocolate, viene nuestra super Rocklet pronta para ser parte de tu vida.',
      img : 'img/rocklets.jpg',
      stock: 10,
      id:3
    }
  ]
  const [cookies, setCookies] = useState([]);
  const getCookies = () => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(galletitas)
        },2000)
      })
  }
  useEffect( () => {
      getCookies().then((response) => {
          setCookies(response)
      }).catch((err)=>{
          alert("Error!")
      })
  })

  return (
    <div className="App">
      <NavBar/>
      <ItemList props={cookies} />
    </div>
  );
}

export default App;
