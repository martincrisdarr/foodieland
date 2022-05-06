import React from 'react'
import breakfast from '../../assets/images/homePage/categories/breakfast.png'
import vegan from '../../assets/images/homePage/categories/vegan.png'
import meat from '../../assets/images/homePage/categories/meat.png'
import dessert from '../../assets/images/homePage/categories/dessert.png'
import lunch from '../../assets/images/homePage/categories/lunch.png'
import chocolate from '../../assets/images/homePage/categories/chocolate.png'

function Categories() {
  return (
    <>
        <div className='w-full px-4 py-32 md:px-16 '>
            <div className='flex justify-between inter font-semibold mt-16 md:mt-0'>
                <h1 className=' text-4xl'>Categories</h1>
                <h2 className='bg-[#E7FAFE] text-sm md:text-md px-6 py-4 cursor-pointer rounded-3xl '>View All Categories</h2>
            </div>
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-16 gap-8 inter font-semibold'>
                <li className='flex flex-col justify-center items-center rounded-xl py-4 mx-auto breakfast w-36 '><img src={breakfast}/><p className='mt-4'>Breakfast</p></li>
                <li className='flex flex-col justify-center items-center rounded-xl py-4 mx-auto vegan w-36 '><img src={vegan}/><p className='mt-4'>Vegan</p></li>
                <li className='flex flex-col justify-center items-center rounded-xl py-4 mx-auto meat w-36 '><img src={meat}/><p className='mt-4'>Meat</p></li>
                <li className='flex flex-col justify-center items-center rounded-xl py-4 mx-auto dessert w-36 '><img src={dessert}/><p className='mt-4'>Dessert</p></li>
                <li className='flex flex-col justify-center items-center rounded-xl py-4 mx-auto lunch w-36 '><img src={lunch}/><p className='mt-4'>Lunch</p></li>
                <li className='flex flex-col justify-center items-center rounded-xl py-4 mx-auto chocolate w-36  '><img src={chocolate}/><p className='mt-4'>Chocolate</p></li>
            </ul>
        </div>
    </>
  )
}

export default Categories