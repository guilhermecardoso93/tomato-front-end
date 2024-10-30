import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FoodItem } from "../FoodItem";

import "./styles.css";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filtra itens pela categoria
  const filteredFoodList = food_list.filter(
    (item) => item.category === category
  );

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item) => (
          <FoodItem
            key={item.id} // Usa item.id como key
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
