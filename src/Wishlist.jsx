// Wishlist.js
// import React, { useState } from 'react';

const Wishlist = ({ wishlist, removeFromWishlist, moveToCart }) => {
  const handleMoveToCart = (productId) => {
    moveToCart(productId);
  };

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.length === 0 &&
        <div className='empty-cart'>Wishlist is empty</div>
      }
      {wishlist.map((item) => (
        <div className="wishlist-item" key={item.id}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          <button onClick={() => handleMoveToCart(item.id)}>Move to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
