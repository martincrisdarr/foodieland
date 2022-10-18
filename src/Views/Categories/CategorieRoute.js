import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/recipes/Recipe/RecipeCard";
import recipes from "../../data/recipes.json";
function CategorieRoute() {
  const { category } = useParams();
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    setSelected(
      recipes.recipe.filter((recipe) => recipe.category === category)
    );
  }, [category]);
  return (
    <>
      <h1 className="pt-36 text-center text-6xl capitalize tracking-widest lobster">
        {category}
      </h1>
      <div className="mt-16 flex px-16 justify-center gap-8 flex-wrap">
        {selected &&
          selected.map((select) => (
            <RecipeCard recipe={select} key={select.name} />
          ))}
      </div>
    </>
  );
}

export default CategorieRoute;
