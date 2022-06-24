import * as React from 'react';
import { useState, useContext } from 'react';
import { Typography, Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { CartContext } from '../context/cartContext';
//ItemCount arma el contador para el  detalle del item
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
    if(count>1){
        setCount(count - 1)
    }
 }
 const addProduct = () => {
    setShowButton(true)
    addProducttoCart(data)
 }

 return (
    <div>
    {props.stock > 0 &&( 
    <div>        
        <div className='counter-div'>
            <Button variant="text" onClick={onRemove} className='btn_effect'><RemoveIcon/></Button>
            <Typography variant="body2" component="div" mt={1}>{count}</Typography>
            <Button variant="text" onClick={onAdd} className='btn_effect'><Add/></Button>
        </div>
        <div className='agregarCarrito' >
            <Button onClick={addProduct} className='btn_effect'>
                <Typography variant="body2" component="div" >Agregar al carrito</Typography>
            </Button>
        </div>
    </div> )}
    {props.stock == 0 &&( //Si no hay stock muestra leyenda "Agotado"
        <div>
        <Typography variant="h6" component="div" mt={1}>AGOTADO</Typography>      
        </div>
    )}
    </div>
    
 )
}
export default ItemCount
