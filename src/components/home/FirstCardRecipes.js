import React, { useState } from "react";
import { BsClockFill, BsFillHeartFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from "react-router-dom";
function FirstCardRecipes({ recipe }) {
  const [liked, setLiked] = useState(true);
  const likedClick = () => {
    setLiked(!liked);
  };
  return (
    <>
      <div className="p-4 rounded-3xl mx-auto flex flex-col justify-end overflow-hidden w-[300px] h-[420px]  shadow-md relative lightblueBackgrounds">
        <Link to={`/recipe/${recipe.name.toLowerCase()}`}>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="rounded-3xl  object-cover  w-[300px] h-[300px]"
          />

          <h1 className="inter font-semibold text-lg mt-4">{recipe.name} </h1>
        </Link>
        <div className="flex gap-4 mt-4 inter mb-4 ">
          <div className="flex gap-2 items-center">
            <BsClockFill />
            <p className="text-[#00000099]">30 minutes </p>
          </div>
          <div className="flex gap-2 items-center">
            <ImSpoonKnife />
            <p className="text-[#00000099] capitalize">{recipe.category} </p>
          </div>
        </div>
        <div
          className="bg-white flex items-center justify-center cursor-pointer absolute top-4 right-8 rounded-[50%] mt-4 ml-4 p-2 "
          onClick={likedClick}
        >
          <BsFillHeartFill
            className={
              liked ? "text-[#DBE2E5] text-xl" : "text-[#FF6363] text-xl"
            }
          />
        </div>
      </div>
    </>
  );
}

export default FirstCardRecipes;
