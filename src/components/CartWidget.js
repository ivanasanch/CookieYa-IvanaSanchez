import * as React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';

const CartWidget = () => {
    return (
        <Button color="inherit" className="carrito__btn" aria-label="add to shopping cart">
            <ShoppingCartOutlinedIcon />
        </Button>
    )
}
export default CartWidget