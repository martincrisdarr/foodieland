import React from 'react'
import FirstCardRecipes from './FirstCardRecipes'

function FirstRecipes() {
  return (
    <>
        <div>
            <div className='text-center w-full mt-16'>
                <h1 className='text-5xl inter font-semibold'>Simple and tasty recipes</h1>
                <p className='inter font-normal px-6 lg:px-64 mt-6 text-[#00000099] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                
            </div>
            <FirstCardRecipes />
        </div>
    </>
  )
}

export default FirstRecipes