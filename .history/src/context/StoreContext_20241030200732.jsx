import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Adiciona 1 ao item ou inicializa com 1
    }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = {
        ...prev,
        [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
      };

      if (newCart[itemId] === 0) {
        delete newCart[itemId]; // Remove item do carrinho se quantidade é 0
      }
      return newCart;
    });
  };

  const contextValue = {
    food_list,
    removeCart,
    addCart,
    cartItems,
    setCartItems,
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
