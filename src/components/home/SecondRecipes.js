import React from 'react'
import SecondCardRecipes from './SecondCardRecipes'
import fruit from '../../assets/images/homePage/secondRecipes/fruit.png'
import cheeseburguer from '../../assets/images/homePage/secondRecipes/cheeseburguer.png'
import lettuce from '../../assets/images/homePage/secondRecipes/lettuce.png'
import rainbow from '../../assets/images/homePage/secondRecipes/rainbow.png'
import ramen from '../../assets/images/homePage/secondRecipes/ramen.png'
import rice from '../../assets/images/homePage/secondRecipes/rice.png'
import sandwiches from '../../assets/images/homePage/secondRecipes/sandwiches.png'
import taco from '../../assets/images/homePage/secondRecipes/taco.png'

function SecondRecipes() {
  return (
    <>
        <div className='px-16 md:px-16 flex flex-col inter mt-36 w-full gap-16'>
            <div className='flex flex-col md:flex-row gap-8 items-center'>
                <h1 className='text-4xl sm:text-5xl  font-semibold w-full md:w-[50%] '>Try this delicious recipe to make your day</h1>
                <p className='text-[#00000099] md:w-[50%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                <SecondCardRecipes 
                img={fruit}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={cheeseburguer}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={rice}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={taco}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={rainbow}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={sandwiches}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={lettuce}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />

                <SecondCardRecipes 
                img={ramen}
                title='Mixed Tropical Fruit Salad with Superfood Boosts'
                minutes='30 Minutes'
                type='Healthy' />
            </div>
        </div>
    </>
  )
}

export default SecondRecipes