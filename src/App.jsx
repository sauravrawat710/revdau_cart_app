// App.js
import React, { useState } from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Product from './Product';
import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Donuts', price: 10 },
    { id: 2, name: 'Krazy Glue', price: 20 },
    { id: 3, name: 'Gum', price: 30 },
    { id: 4, name: 'Batteries', price: 40 },
    { id: 5, name: 'Chocolate', price: 50 },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      onIncrementQuantity(product.id);
    } else {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const onIncrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity === undefined ? 1 : item.quantity +1 } : item
    );
    setCartItems(updatedCart);
  };

  const onDecrementQuantity = (productId) => {
    if (cartItems.find((item) => item.id === productId && item.quantity === 1)) {
      removeFromCart(productId);
    } else {
      const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity === undefined ? 1 : item.quantity -1 } : item
      );
      setCartItems(updatedCart);
    }
  }

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      
    } else {
      alert('Item already in wishlist');
    }
  };

  const moveToWishlist = (product) => {
    addToWishlist(product);
    removeFromCart(product.id);
  }

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
  };

  const moveToCart = (productId) => {
    const productToMove = wishlist.find((item) => item.id === productId);
    addToCart(productToMove);
    removeFromWishlist(productId);
  };

  return (
    <div className="app">
    <h1 className="app-header">ReactJS Cart and Wishlist (RevDau)</h1>
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} onIncrementQuantity={onIncrementQuantity} onDecrementQuantity={onDecrementQuantity} moveToWishlist={moveToWishlist} />
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={moveToCart} />
    </div>
  );
};

export default App;
