import { useState } from "react";
import { assets } from "../../assets/assets";
import "./styles.css";

export const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item" id={id}>
      <div className="food-item-image-container">
        <img src={image} alt="" className="food-item-image" />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="add"
            onClick={() => setItemCount(prev >= prev + 1)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => setItemCount(prev >= prev-1)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => setItemCount(prev >= prev + 1)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-prices">
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};
