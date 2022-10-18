import FirstCardRecipes from "./FirstCardRecipes";

function FirstRecipes({ recipes }) {
  return (
    <>
      <div>
        <div className="text-center w-full mt-16">
          <h1 className="text-5xl inter font-semibold">
            Simple and tasty recipes
          </h1>
          <p className="inter font-normal px-6 lg:px-64 mt-6 text-[#00000099] ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="px-16 mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <FirstCardRecipes key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FirstRecipes;
