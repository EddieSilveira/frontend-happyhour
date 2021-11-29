import React, { createContext, useState } from "react";
import { BACKEND } from "../constants";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const addToCart = (product) => {
    const { produto, quantidade } = product;

    setCart((old) => {
      let quantity = 0;
      if (old[produto._id]) {
        quantity = old[produto._id].quantity;
      }
      const newCart = {
        ...old,
        [produto._id]: {
          quantity: quantity + quantidade,
          produto,
        },
      };

      let futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      document.cookie = `cart=${JSON.stringify(
        newCart
      )}; expires=${futureDate}`;
      return newCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((old) => {
      const newCart = {};
      Object.keys(old).forEach((id) => {
        if (id !== product[0]) {
          newCart[id] = old[id];
        }
      });
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
