import React from "react";
import Directions from "../../components/recipes/Directions";
import Ingredients from "../../components/recipes/Ingredients";
import MainRecipes from "../../components/recipes/MainRecipes";
import recipes from "../../data/recipes.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeRoute() {
  const [selected, setSelected] = useState({});
  const { recipe } = useParams();
  useEffect(() => {
    setSelected(
      recipes.recipe.find((rec) => rec.name.toLowerCase() === recipe)
    );
  }, [recipe, selected]);
  return (
    <div>
      <MainRecipes selected={selected} />
      <Ingredients selected={selected} />
      <Directions selected={selected} />
    </div>
  );
}

export default RecipeRoute;
