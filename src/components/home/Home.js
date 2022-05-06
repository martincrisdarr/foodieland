import React from 'react'
import Categories from './Categories'
import FirstRecipes from './FirstRecipes'
import MainSplash from './MainSplash'

function home() {
  return (
    <>
        <MainSplash />
        <Categories />
        <FirstRecipes />
    </>
  )
}

export default home