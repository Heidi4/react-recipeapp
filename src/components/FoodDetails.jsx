import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "41a121e3948743fc992fbc949220493a";
  const QUERY_URL = `${URL}?apiKey=${API_KEY}`;
  console.log(QUERY_URL);
  // hook
  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(QUERY_URL);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }

    fetchFoodDetails();
  }, [foodId]);
  // jsx
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeTitle}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👦‍👦
            <strong>
              Serves
              {food.servings}
            </strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>

        <div>
          $
          <span>
            <strong>
              {(food.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
