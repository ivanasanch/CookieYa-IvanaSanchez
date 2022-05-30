import * as React from "react";
import { Typography, Card, CardContent, CardActionArea, CardMedia} from "@mui/material";
import './card.css';
import ItemCount from './ItemCount.js';
const Item = ({ img, title, text, price, stock }) => {
  return (
    <div className="card-container">
    <Card>
      <CardActionArea>
        <CardContent>
          <div className="card-list">
            <CardMedia component="img" height="150" image={img} alt={title} className = "card-list-img"/>
            <Typography variant="h4" component="div">{title}</Typography>
            <Typography variant="body2" component="div">{text}</Typography>
            <Typography variant="body2" component="div">${price}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={stock}/>
    </Card>
    </div>
  );
};
export default Item;


