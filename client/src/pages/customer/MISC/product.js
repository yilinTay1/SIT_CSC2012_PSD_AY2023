import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;