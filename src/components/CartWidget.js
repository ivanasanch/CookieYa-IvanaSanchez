import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Menu, MenuItem, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "../css/card.css";

const CartWidget = () => {
  const { cartListItems } = useContext(CartContext);
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
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="carrito__btn"
        aria-label="add to shopping cart"
        color="inherit"
      >
        <ShoppingCartOutlinedIcon aria-haspopup="true" />
      </Button>
      <Menu
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
          <MenuItem onClick={()=>clearCart()} key={99} style={{color:"#f19444", textTransform:"uppercase"}}>
            <Typography variant="body2">
              Vaciar Carrito
            </Typography>
            </MenuItem>
        )}
        {cartListItems.map((item) => {
          return (
            <MenuItem key={item.id} style={{width: "20em", display:"flex", justifyContent: "space-around"}}>
              <div>
                <img src={`/${item.img}`} width="50px" alt={item.title}></img>
              </div>
              <div>
                <div>{item.title}</div>
                <div>{item.count} x ${item.price}</div>
              </div>
              <div>
                  <Button variant="text" onClick={()=> {delProducttoCart(item)}}>
                      <DeleteIcon />
                  </Button>
              </div>
            </MenuItem>
            
          );
        })}
      </Menu>
    </div>
  );
};
export default CartWidget;
