import * as React from 'react';
import { useState, useContext } from 'react';
import { Typography, Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { CartContext } from '../context/cartContext';

const ItemCount = ({props, setShowButton}) => {
const [count, setCount] = useState(1);
const {addProducttoCart} = useContext(CartContext)
const onAdd = () => {
    if(count < props.stock) {      
        setCount(count + 1)
    }
} 
const data = {...props, count}
const onRemove = () => {
    if(count>0){
        setCount(count - 1)
    }
 }
 const addProduct = () => {
    setShowButton(true)
    addProducttoCart(data)
 }

 return (
     <>
    <div className='counter-div'>
        <Button variant="text" onClick={onRemove}><RemoveIcon sx={{ color: "#f19444"}}/></Button>
        <Typography variant="body2" component="div" mt={1}>{count}</Typography>
        <Button variant="text" onClick={onAdd}><Add sx={{ color: "#f19444"}}/></Button>
    </div>
    <div className='agregarCarrito'>
        <Button sx={{ color: "#f19444"}} onClick={addProduct}>
            <Typography variant="body2" component="div">Agregar al carrito</Typography>
        </Button>
    </div>
  </> 
 )
}
export default ItemCount
