import { createContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cartListItems, setCartListItem] = useState([])
    
    const addProducttoCart = (cookie) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === cookie.id)
        if(!isInCart) {
        setCartListItem(cartListItems => [...cartListItems,cookie])}
        else {
            alert("Ya agregaste este artículo!")
        }
    }
    const delProducttoCart = (cookie) => {
        setCartListItem(cartListItems.filter(c=>c.id !== cookie.id))
    }
    const clearCart = () =>{
        setCartListItem([])
    }
    const data = {
        cartListItems, 
        addProducttoCart,
        delProducttoCart,
        clearCart}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartContext}
export default CartProvider;