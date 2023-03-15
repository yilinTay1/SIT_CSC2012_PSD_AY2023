import React from "react";
import { PRODUCTS } from "./products";

export const ShopContext = createContext(null)


const getDefaultCart = () =>{
    let cart ={}
    for (let i=1;i<PRODUCTS.length;i++){
        cart[i]=0;
    }
    return cart;
}


export const ShopContextProvider = (props)=>{
    const { id, productName, price, productImage} = props.data;
    const [cartItems, setCartItems]=useState(getDefaultCart);

    const addtocart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}));
    }

    const removefromcart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
    }
    const contextValue ={cartItems,addtocart,removefromcart}
    return  <ShopContextProvider value={contextValue}>{props.children}</ShopContextProvider>
}