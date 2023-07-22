// CartItem.js
import React from 'react';

const  CartItem = ({ item, onRemove, onUpdateQuantity, moveToWishlist }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <span>{name} </span>
      <span>₹{price}</span>
      <span>Quantity: {quantity === undefined ? 1 : quantity}</span>
      <button onClick={() => onRemove(id)}>Remove</button>
      <button onClick={() => onUpdateQuantity(id)}>Update Quantity</button>
      <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
    </div>
  );
};

export default CartItem;
