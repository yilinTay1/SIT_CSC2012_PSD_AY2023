import React, { useState } from "react";
import Product from "./product";
import Cart from "./cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of product 3",
      price: 30,
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
      <Cart cartItems={cartItems} />
    </div>
  );
};
export default App;

