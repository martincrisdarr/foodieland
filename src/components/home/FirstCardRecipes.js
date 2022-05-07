import React from 'react'
import {BsClockFill, BsFillHeartFill} from 'react-icons/bs'
import {ImSpoonKnife} from 'react-icons/im'
import recipes from '../firstRecipes.json'
function FirstCardRecipes() {
  return (
    <>
    <div className='grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 '>
        {
            recipes.map((recipe) =>
                <div key={recipe.id} className='p-4 rounded-3xl lightblueBackgrounds grid shadow-md '>
                    <img src={recipe.img} className='rounded-3xl  object-cover w-full'/>
                    <h1 className='inter font-semibold text-lg mt-4'>{recipe.title} </h1>
                    <div className='flex gap-4 mt-4 inter mb-4 '>
                        <div className='flex gap-2 items-center'>
                            <BsClockFill />
                            <p className='text-[#00000099]'>{recipe.minutes} </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <ImSpoonKnife/>
                            <p className='text-[#00000099]'>{recipe.type} </p>
                        </div>
                        
                    </div>
                    <div className='bg-white flex items-center justify-center cursor-pointer absolute rounded-[50%] mt-4 ml-4 p-2 '>
                        <BsFillHeartFill className='text-[#DBE2E5] text-xl' />
                    </div>
                </div>
            )
        }
    </div>
    </>
  )
}

export default FirstCardRecipes