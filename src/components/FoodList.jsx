import React from "react";
import FoodItem from "./FoodItem";

function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((foodItem) => (
      <FoodItem key={foodItem.id} foodItem={foodItem}/>
      ))}
    </div>
  );
}

export default FoodList;
