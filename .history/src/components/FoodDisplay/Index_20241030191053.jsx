import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./styles.css";
import { FoodItem } from "../FoodItem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item._name}
              description={item._description}
              price={item._price}
              image={item._image}
            />
          );
        })}
      </div>
    </div>
  );
};
