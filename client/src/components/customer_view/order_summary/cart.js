import React, { useState } from 'react';


function CartItem({ item, updateItemQuantity, removeItem }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
    updateItemQuantity(item.id, value);
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td><input type="number" value={quantity} onChange={handleChange} /></td>
      <td>${item.price.toFixed(2)}</td>
      <td>${(quantity * item.price).toFixed(2)}</td>
      <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
    </tr>
  );
}

function Cart({ items, updateItemQuantity, removeItem }) {
  const [cartItems, setCartItems] = useState(items);
  const updateItemQuantity = (itemId, quantity) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: quantity
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };
  const subtotal = Cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItem key={item.id} item={item} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Subtotal</td>
            <td>${subtotal.toFixed(2)}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">Tax (10%)</td>
            <td>${tax.toFixed(2)}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">Total</td>
            <td>${total.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button className="checkout">Checkout</button>
    </div>
  );
}

export default Cart;
