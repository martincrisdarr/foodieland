import { useState, useEffect } from "react";
// import Directions from "../../components/recipes/Directions";
// import Ingredients from "../../components/recipes/Ingredients";
// import MainRecipes from "../../components/recipes/MainRecipes";
import { BsSearch } from "react-icons/bs";
import RecipeCard from "../../components/recipes/Recipe/RecipeCard";
import recipes from "../../data/recipes.json";

function Recipes() {
  const [message, setMessage] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setFiltered(
      recipes.recipe.filter((recipe) =>
        recipe.name.toLowerCase().includes(message.toLowerCase())
      )
    );
  }, [message]);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {/* <MainRecipes />
      <Ingredients />
      <Directions /> */}
      <form
        className="w-full px-8 md:px-32 pt-32 flex gap-2 items-center relative mb-12"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Find a recipe"
          className="py-4 px-6 w-full border-2 border-gray-500 rounded-xl outline-none placeholder-gray-900 "
          onChange={handleChange}
        />
        <button type="submit" className="absolute right-16 md:right-36 ">
          <BsSearch size="2rem" />
        </button>
      </form>
      {filtered.length === 0 && (
        <div className="w-full text-center text-3xl inter font-semibold">
          <h1>No found results.</h1>
        </div>
      )}
      <div className="w-full flex justify-center items-center px-16 flex-wrap gap-8">
        {filtered
          ? filtered.map((filtered) => (
              <div key={filtered.description}>
                <RecipeCard recipe={filtered} />
              </div>
            ))
          : recipes.recipe.map((recipe) => <RecipeCard recipe={recipe} />)}
      </div>
    </>
  );
}

export default Recipes;
