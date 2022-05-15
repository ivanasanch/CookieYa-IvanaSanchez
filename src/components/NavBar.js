import * as React from 'react';
 import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <AppBar position="static" className='header-primary'>
       <Toolbar>
            <div className="NavBarLogo">
                <img src='img/logo-color.png' alt='Logo'/>
            </div>
            <div className="NavBarList">
                <Button>
                    <Typography variant="button" component="div" className='navbar__btn'>Inicio</Typography>
                </Button>
                <Button>
                    <Typography variant="button" component="div" className='navbar__btn'>Productos</Typography>
                </Button>
                <Button>
                    <Typography variant="button" component="div" className='navbar__btn'>Contacto</Typography>
                </Button>
                <Button color="inherit" className="carrito__btn" aria-label="add to shopping cart">
                    <ShoppingCartOutlinedIcon />
                </Button>
            </div>
        </Toolbar>
    </AppBar>
)
};

export default NavBar;
