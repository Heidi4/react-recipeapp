import React from "react";
import FoodItem from "./FoodItem";

function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((foodItem) => (
        <FoodItem setFoodId={setFoodId} key={foodItem.id} foodItem={foodItem} />
      ))}
    </div>
  );
}

export default FoodList;
