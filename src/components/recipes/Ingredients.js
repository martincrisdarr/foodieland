import React from "react";
import Ingredient from "./Ingredient";

function Ingredients({ selected }) {
  const { ingredient } = selected;
  return (
    <>
      <div className="px-6 lg:px-16 inter ">
        <h1 className="font-semibold text-4xl">Ingredients</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center mt-12  gap-16">
          {ingredient?.map((recipe, index) => (
            <Ingredient key={index} ingredient={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Ingredients;
