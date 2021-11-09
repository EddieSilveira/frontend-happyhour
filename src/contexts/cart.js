import React, { createContext, useState } from 'react';
import { BACKEND } from '../constants';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart ] = useState({})
  console.log(cart)
  const addToCart = product => {
    const {produto, quantidade} = product
    setCart((old) => {
      let quantity = quantidade
      if(old[produto._id]){
        quantity = old[product._id].quantity
      }
      return {
        ...old,
      [produto._id]: {
        quantity: quantity + 1,
        produto
      }  
      }
    })
  }
  return (
    <CartContext.Provider
      value={{cart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
