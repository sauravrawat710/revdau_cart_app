// Product.js
import React from 'react';

const Product = ({ product, addToCart, addToWishlist }) => {
  const { name, price } = product;

  return (
    <div className="product">
      <span>{name} </span>
      <span>₹{price} </span>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default Product;
