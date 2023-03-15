import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const Product =(props)=>{
    const { id, productName, price, productImage} = props.data;
    const {addtocart} = useContext(ShopContext); 
    const cartItemAmount = cartItems[id]
    return(
          <div className="product">
        <img src={productImage} />
        <div className="description">
        <p>
             <b>
                {productName}
             </b>
        </p>
        <p>
                ${price}
        </p>
        </div>
        <button className="addtocartbttn" onClick={() => addtocart(id)}> 
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
);
};