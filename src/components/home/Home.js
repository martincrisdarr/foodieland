import React from 'react'
import Categories from './Categories'
import FirstRecipes from './FirstRecipes'
import GuySplash from './GuySplash'
import Instagram from './Instagram'
import MainSplash from './MainSplash'
import SecondRecipes from './SecondRecipes'

function home() {
  return (
    <>
        <MainSplash />
        <Categories />
        <FirstRecipes />
        <GuySplash />
        <Instagram />
        <SecondRecipes />
    </>
  )
}

export default home