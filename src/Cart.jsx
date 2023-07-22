// Cart.js
// import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, updateQuantity, moveToWishlist }) => {
  return (
    <div className='cart'>
      <h2>Cart</h2>
       {cartItems.length === 0 &&
        <div className='empty-cart'>Cart is empty</div>
      }
      { cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          moveToWishlist={moveToWishlist}
        />
      ))}
    </div>
  );
};

export default Cart;
