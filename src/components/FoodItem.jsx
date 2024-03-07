import React from "react";
import styles from "./fooditem.module.css";
function FoodItem({ foodItem }) {
  return (
    <div className={styles.foodContainer}>
      <img
        className={styles.foodImage}
        src={foodItem.image}
        alt={foodItem.title}
      />
      <div className={styles.foodContent}>
        <p className={styles.foodTitle}>{foodItem.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.recipeButton}>View Recipe</button>
      </div>
    </div>
  );
}

export default FoodItem;
