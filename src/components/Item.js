import * as React from "react";
import { Typography, Card, CardContent, CardActionArea, CardMedia,Button } from "@mui/material";
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import './card.css';
const Item = ({ img, title, text, price, stock }) => {
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
  return (
    <div className="card-container">
    <Card>
      <CardActionArea>
        <CardContent>
          <div className="card-list">
            <CardMedia
              component="img"
              height="150"
              image={img}
              alt={title}
              className = "card-list-img"
            />
            <Typography variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="body2" component="div">
              {text}
            </Typography>
            <Typography variant="body2" component="div">
              ${price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <div className='counter-div'>
        <Button variant="text" onClick={onRemove}><RemoveIcon sx={{ color: "#f19444"}}/></Button>
        <Typography variant="body2" component="div" mt={1}>{count}</Typography>
        <Button variant="text" onClick={onAdd}><Add sx={{ color: "#f19444"}}/></Button>
      </div>
      <div className='agregarCarrito'>
        <Button sx={{ color: "#f19444"}}><p>Agregar al carrito</p></Button>
      </div>
    </Card>
    </div>
  );
};
export default Item;


