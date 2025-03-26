import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const Add = (product) => {
    setcart((pre) => [...pre, product]);
  };

  const remove = (index) => {
    setcart((pre) => pre.filter((_, i) => i != index));
  };

  return (
    <CartContext.Provider value={{ Add, remove, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
