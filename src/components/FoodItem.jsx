import React from "react";

function FoodItem({ foodItem }) {
  return (
    <div>
    <img src={foodItem.image} alt={foodItem.title} />
      <h1>{foodItem.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}

export default FoodItem;
