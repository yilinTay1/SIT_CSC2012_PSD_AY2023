import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;