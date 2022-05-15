import * as React from 'react';
import './NavBar.css';
import {AppBar,Toolbar,Typography,Button} from '@mui/material';
import CartWidget from './CartWidget';
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
                <CartWidget />
            </div>
        </Toolbar>
    </AppBar>
)
};

export default NavBar;
