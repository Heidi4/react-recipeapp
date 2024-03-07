import React from "react";

function FoodDetails({ foodId }) {
  `
  GET https://api.spoonacular.com/recipes/716429/information?includeNutrition=false`;
  return <div>Food details {foodId}</div>;
}

export default FoodDetails;
