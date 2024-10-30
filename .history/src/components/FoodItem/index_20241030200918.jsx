import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./styles.css";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, price, description, image }) => {
  const { removeCart, addCart, cartItems } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0; // Define a quantidade específica do item no carrinho

  return (
    <div className="food-item" id={id}>
      <div className="food-item-image-container">
        <img src={image} alt={name} className="food-item-image" />
        {itemCount === 0 ? (
          <img
            src={assets.add_icon_white}
            alt="Adicionar ao carrinho"
            className="add"
            onClick={() => addCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="Remover do carrinho"
              onClick={() => removeCart(id)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="Adicionar ao carrinho"
              onClick={() => addCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <div className="food-item-prices">
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};
