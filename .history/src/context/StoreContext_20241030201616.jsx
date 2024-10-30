import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addCart = (itemId) => {
    if(!cartItems[itemId]) {
      setCartItems((prev) => ({...prev, [itemId]:1}))
    } else {
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = (updatedCart[itemId] || 0) - 1;

      if (updatedCart[itemId] <= 0) {
        delete updatedCart[itemId]; // Remove o item se a quantidade for zero ou menos
      }

      return updatedCart;
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
