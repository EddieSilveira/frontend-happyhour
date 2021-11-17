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
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeToCart = (product) => {
    const { quantity, produto } = product;
    console.log(produto);
    for (let produto of Object.keys(cart)) {
      if (produto === product[0]) {
        console.log(product);
      }
    }
    console.log(cart);
    // const { produto, quantidade } = product;
    // setCart((old) => {
    //   let quantity = 0;
    //   if (old[produto._id]) {
    //     quantity = old[produto._id].quantity;
    //   }
    //   const newCart = {
    //     ...old,
    //     [produto._id]: {
    //       quantity: quantity + quantidade,
    //       produto,
    //     },
    //   };
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    //   return newCart;
    // });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
