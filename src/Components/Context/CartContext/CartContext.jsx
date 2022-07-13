import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    // setCart([...cart, product]);
    const productExist = cart.some((pr) => pr.id === product.id);
    console.log(productExist);
    if (productExist === false) {
      const productoCantidad = { ...product, cantidad: 1 };
      setCart([...cart, productoCantidad]);
    } else {
      setCart(
        cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cantidad: pr.cantidad + 1 };
          }
          return pr;
        })
      );
    }
  };

  const deleteItemCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const deleteAllProducts = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, deleteItemCart, deleteAllProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
