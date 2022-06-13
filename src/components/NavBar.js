import * as React from "react";
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem
} from "@mui/material";
import CartWidget from "./CartWidget";
import { CartContext } from "../context/cartContext";
const NavBar = () => {
  const { cartListItems } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ["dulces", "salados"];
  return (
    <AppBar position="static" className="header-primary">
      <Toolbar>
        <div className="NavBarLogo">
          <Link to="/">
            <img src="/img/logo-color.png" alt="Logo" />
          </Link>
        </div>
        <div className="NavBarList">
          <Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="button"
                component="div"
                className="navbar__btn"
              >
                Inicio
              </Typography>
            </Link>
          </Button>
          <Button onClick={handleClick}>
            <Typography
              variant="button"
              component="div"
              className="navbar__btn"
            >
              Productos
            </Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {categories.map((cat) => {
              return (
                <MenuItem onClick={handleClose} key={cat}>
                  <Link
                    to={`/productos/${cat}`}
                    style={{
                      textDecoration: "none",
                      color: "#f19444",
                      textTransform: "uppercase",
                    }}
                  >
                    {cat}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
          <Button>
            <Link to="/contacto" style={{ textDecoration: "none" }}>
              <Typography
                variant="button"
                component="div"
                className="navbar__btn"
              >
                Contacto
              </Typography>
            </Link>
          </Button>
          {cartListItems.lenght !== 0 &&(
            <CartWidget />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
