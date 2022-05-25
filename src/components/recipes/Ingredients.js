import React from 'react'
import Ingredient from './Ingredient'
import meatball from '../../assets/images/homePage/firstRecipes/meatballs.png'
import pasta from '../../assets/images/homePage/firstRecipes/pasta.png'
import rice from '../../assets/images/homePage/firstRecipes/rice.png'
function Ingredients() {
    
  return (
    <>
      <div className='px-6 lg:px-16 inter'>
        <h1 className='font-semibold text-4xl'>Ingredients</h1>
        <div className='flex mt-12 justify-between flex-wrap gap-16'>
          {/* MAIN DISH INGREDIENTS */}
          <div className='flex gap-4 flex-col'>
            <h1 className='text-2xl mb-6 font-semibold'>For main dish</h1>
            <Ingredient ingrediente='Carrot'/>
            <Ingredient ingrediente='Popato'/>
            <Ingredient ingrediente='Eggs'/>
            <Ingredient ingrediente='Fish'/>
            <Ingredient ingrediente='Meat'/>
          </div>
          {/* SAUCE INGREDIENTS */}
          <div className='flex gap-4 flex-col'>
            <h1 className='text-2xl mb-6 font-semibold'>For the sauce</h1>
            <Ingredient ingrediente='Chicken'/>
            <Ingredient ingrediente='Onion'/>
            <Ingredient ingrediente='Pepper'/>
          </div>
          {/* OTHER RECIPES */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl mb-6 font-semibold'>Other recipe</h1>
            <div className='flex gap-4  cursor-pointer'>
              <img src={meatball} alt="meatball" className='w-48 h-32 object-cover rounded-xl' />
              <div>
                <p className='font-semibold'>Chicken Meatball with Creamy Cheese</p>
                <p className='text-[#00000099] '>By Andreas Paula</p>  
              </div>
            </div>
            <div className='flex gap-4  cursor-pointer'>
              <img src={pasta} alt="meatball" className='w-48 h-32 object-cover rounded-xl' />
              <div>
                <p className='font-semibold'>The Creamiest Creamy Chicken and Bacon Pasta</p>
                <p className='text-[#00000099] '>By Andreas Paula</p>  
              </div>
            </div>
            <div className='flex gap-4  cursor-pointer'>
              <img src={rice} alt="meatball" className='w-48 h-32 object-cover rounded-xl' />
              <div>
                <p className='font-semibold'>The Best Easy One Pot Chicken and Rice</p>
                <p className='text-[#00000099] '>By Andreas Paula</p>  
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
        
    </>
  )
}

export default Ingredients