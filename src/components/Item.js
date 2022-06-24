import * as React from "react";
import { Typography, Card, CardContent, CardActionArea, CardMedia} from "@mui/material";
import '../css/style.css';
import { Link } from "react-router-dom";
//Item muestra los datos básicos en ItemList
const Item = ({ img, title, text, price, id }) => {
  return (
    <div className="card-container">
    <Card className="card-item">
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


