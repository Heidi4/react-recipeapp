import React, { useEffect } from "react";
import { useState } from "react";

function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "d2f310d4799f4ee5ace9ab95a618ba8c";
  // Hooks - are functions all HOOKS are defined inside components
  // useeState() hook for setting states
  const [query, setQuery] = useState("Pizza");
  // useEffect()  - fetch data externally
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      // const [foodData, setFoodData] = useEffect([])
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}

export default Search;
