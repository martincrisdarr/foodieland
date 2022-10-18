import React from "react";
import Categories from "../../components/home/Categories";
import FirstRecipes from "../../components/home/FirstRecipes";
import GuySplash from "../../components/home/GuySplash";
import Instagram from "../../components/home/Instagram";
import MainSplash from "../../components/home/MainSplash";
import recipes from "../../data/recipes.json";

function home() {
  const { recipe } = recipes;
  return (
    <>
      <MainSplash />
      <Categories />
      <FirstRecipes recipes={recipe} />
      <GuySplash />
      <Instagram />
      <FirstRecipes recipes={recipe} />
    </>
  );
}

export default home;
