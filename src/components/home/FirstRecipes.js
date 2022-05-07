import React from 'react'
import FirstCardRecipes from './FirstCardRecipes'
import cheeseburguer from '../../assets/images/homePage/firstRecipes/cheeseburguer.png'
import hotcakes from '../../assets/images/homePage/firstRecipes/hotcakes.png'
import meatballs from '../../assets/images/homePage/firstRecipes/meatballs.png'
import pancake from '../../assets/images/homePage/firstRecipes/pancake.png'
import pasta from '../../assets/images/homePage/firstRecipes/pasta.png'
import salad from '../../assets/images/homePage/firstRecipes/salad.png'
import rice from '../../assets/images/homePage/firstRecipes/rice.png'
import salmon from '../../assets/images/homePage/firstRecipes/salmon.png'
function FirstRecipes() {
  return (
    <>
        <div>
            <div className='text-center w-full mt-16'>
                <h1 className='text-5xl inter font-semibold'>Simple and tasty recipes</h1>
                <p className='inter font-normal px-6 lg:px-64 mt-6 text-[#00000099] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                
            </div>
            <div className='px-16 mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <FirstCardRecipes 
                img={cheeseburguer}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <FirstCardRecipes 
                img={salmon}
                title='Fresh Lime Roasted Salmon with Ginger Sauce'
                minutes='30 Minutes'
                type='Fish' />

                <FirstCardRecipes 
                img={pancake}
                title='Strawberry Oatmeal Pancake with Honey Syrup'
                minutes='30 Minutes'
                type='Breakfast' />

                <FirstCardRecipes 
                img={salad}
                title='Fresh and Healthy Mixed Mayonnaise Salad'
                minutes='30 Minutes'
                type='Healthy' />

                <FirstCardRecipes 
                img={meatballs}
                title='Chicken Meatballs with Cream Cheese'
                minutes='30 Minutes'
                type='Meat' />

                <FirstCardRecipes 
                img={hotcakes}
                title='Fruity Pancake with Orange & Blueberry'
                minutes='30 Minutes'
                type='Sweet' />

                <FirstCardRecipes 
                img={rice}
                title='The Best Easy One Pot Chicken and Rice'
                minutes='30 Minutes'
                type='Snack' />

                <FirstCardRecipes 
                img={pasta}
                title='The Creamiest Creamy Chicken and Bacon Pasta'
                minutes='30 Minutes'
                type='Noodles' />
            </div>
        </div>
    </>
  )
}

export default FirstRecipes