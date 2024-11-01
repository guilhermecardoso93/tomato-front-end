import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

import "./styles.css";

export const Cart = () => {
  const { food_list, cartItems, setCartItems, addCart, removeFromCart } =
    useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cart-items-title cart-items-item">
                <p>{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
