import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Menu, MenuItem, Typography, Button, Badge } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "../css/card.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartListItems,totalCount } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {delProducttoCart} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    {cartListItems.length > 0 && (
      <div><Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="carrito__btn"
          aria-label="add to shopping cart"
          color="inherit"
        >
          <Badge badgeContent={totalCount} color="success" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <ShoppingCartIcon aria-haspopup="true" />
          </Badge>
        </Button><Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className="menuWidget"
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
        >
            {cartListItems.length === 0 && (
              <MenuItem onClick={handleClose} key={0}>
                <Typography variant="body2">
                  No has agregado nada al carrito
                </Typography>
              </MenuItem>
            )}
            {cartListItems.length > 0 && (
              <div>
              <MenuItem onClick={() => clearCart()} key={99} style={{ color: "#f19444", textTransform: "uppercase" }}>
                <Typography variant="body2">
                  Vaciar Carrito
                </Typography>
              </MenuItem>
              <MenuItem><Typography variant="body2">
                <Link to={'/cart'} style={{ color: "#f19444", textTransform: "uppercase", textDecoration:"none" }}>Ver carrito</Link>
              </Typography>
              </MenuItem></div>
            )}
            {cartListItems.map((item) => {
              return (
                <MenuItem key={item.id} style={{ width: "20em", display: "flex", justifyContent: "space-around" }}>
                  <div>
                    <img src={`/${item.img}`} width="50px" alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div>{item.count} x ${item.price}</div>
                  </div>
                  <div>
                    <Button variant="text" onClick={() => { delProducttoCart(item); } }>
                      <DeleteIcon />
                    </Button>
                  </div>
                </MenuItem>

              );
            })}
          </Menu></div>
    )}
    </div>
  );
};
export default CartWidget;
