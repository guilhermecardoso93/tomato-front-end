import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./styles.css";

export const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
    </div>
  );
};
