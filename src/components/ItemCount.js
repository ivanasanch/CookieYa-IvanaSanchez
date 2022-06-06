import * as React from 'react';
import { useState } from 'react';
import { Typography, Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
const ItemCount = ({stock, id, setShowButton}) => {
const [count, setCount] = useState(1);
const onAdd = () => {
    if(count < stock) {      
        setCount(count + 1)
    }
} 
const onRemove = () => {
    if(count>0){
        setCount(count - 1)
    }
 }
 const addProduct = () => {
    setShowButton(true)
 }
 return (
     <>
    <div className='counter-div'>
    <Button variant="text" onClick={onRemove}><RemoveIcon sx={{ color: "#f19444"}}/></Button>
    <Typography variant="body2" component="div" mt={1}>{count}</Typography>
    <Button variant="text" onClick={onAdd}><Add sx={{ color: "#f19444"}}/></Button>
  </div>
  <div className='agregarCarrito'>
    <Button sx={{ color: "#f19444"}} onClick={addProduct}><p>Agregar al carrito</p></Button>
  </div>  
  </> 
 )
}
export default ItemCount
