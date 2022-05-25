import React from 'react'
import Directions from './Directions'
import Ingredients from './Ingredients'
import MainRecipes from './MainRecipes'

function Recipes() {
  return (
    <>
        <MainRecipes />
        <Ingredients />
        <Directions />
    </>
  )
}

export default Recipes