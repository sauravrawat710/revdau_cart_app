// CartItem.js
import React from 'react';

const  CartItem = ({ item, onRemove, onIncrementQuantity, onDecrementQuantity, moveToWishlist }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <span>{name} </span>
      <span>₹{price}</span>
      <button onClick={() => onRemove(id)}>Remove</button>
      <button onClick={() => onDecrementQuantity(id)}>-</button>
      <span>{quantity === undefined ? 0 : quantity}</span>
      <button onClick={() => onIncrementQuantity(id)}>+</button>
      <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
    </div>
  );
};

export default CartItem;
