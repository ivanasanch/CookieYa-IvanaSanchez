import { createContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cartListItems, setCartListItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const addProducttoCart = (cookie) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === cookie.id)
        if(!isInCart) {
        setCartListItem(cartListItems => [...cartListItems,cookie])
        setTotalPrice(totalPrice + (cookie.count*cookie.price))
        setTotalCount(totalCount+cookie.count)
    }
        else {
            alert("Ya agregaste este artículo!")
        }
    }
    const delProducttoCart = (cookie) => {
        setCartListItem(cartListItems.filter(c=>c.id !== cookie.id))
        setTotalPrice(totalPrice - (cookie.count*cookie.price))
        setTotalCount(totalCount - cookie.count)
    }
    const clearCart = () =>{
        setCartListItem([])
        setTotalPrice(0)
        setTotalCount(0)
    }
    const data = {
        cartListItems, 
        addProducttoCart,
        delProducttoCart,
        clearCart, 
        totalPrice,
        totalCount}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartContext}
export default CartProvider;