import React from "react";
import { Link } from "react-router-dom";
function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.name.toLowerCase()}`}>
      <div
        className={`w-[300px] h-[300px] animate__animated animate__fadeInUp flex flex-col justify-between overflow-hidden text-xl font-semibold meat py-4 inter px-6 rounded-xl ${recipe.category}`}
      >
        <h1>{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-[200px] object-cover rounded-xl "
        />
      </div>
    </Link>
  );
}

export default RecipeCard;
