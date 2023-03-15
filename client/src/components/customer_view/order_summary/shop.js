import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from "./Product"
import { ShopContextProvider } from './shop-context';

export const shop = () => {
  return(
    <div classname= "shop">
      <ShopContextProvider>
      <div classname = "shopTitle">
        <h1>Wortheats</h1>
      </div>
      <div classname="products">
      {
        PRODUCTS.map((product) => (<product data={product} />
        ))}
        </div>
        </ShopContextProvider>
      </div>
  )
}