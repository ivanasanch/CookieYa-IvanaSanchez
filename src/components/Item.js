import * as React from "react";
import { Typography, Card, CardContent, CardActionArea, CardMedia} from "@mui/material";
import '../css/card.css';
import { Link } from "react-router-dom";
const Item = ({ img, title, text, price, stock, id }) => {
  return (
    <div className="card-container">
    <Card>
    <Link to={`/producto/${id}`} style={{ textDecoration: 'none', color:'black' }}>
      <CardActionArea>
        <CardContent>
          <div className="card-list" id={id}>
            <CardMedia component="img" height="150" image={`/${img}`} alt={title} className = "card-list-img"/>
            <Typography variant="h4" component="div">{title}</Typography>
            <Typography variant="body2" component="div">{text}</Typography>
            <Typography variant="body2" component="div">${price}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </div>
  );
};
export default Item;


