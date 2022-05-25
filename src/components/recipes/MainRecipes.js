import React from 'react'
import footerSplashName from '../../assets/images/homePage/splashMainPage/footerSplashName.png'
import mainRecipe from '../../assets/images/recipesSection/main.png'
import {ImSpoonKnife} from 'react-icons/im'
import {BsClockFill} from 'react-icons/bs'
import {AiOutlinePrinter} from 'react-icons/ai'
import {FiShare} from 'react-icons/fi'
function MainRecipes() {
  return (
    <>
        <div className='px-6 py-16 lg:px-16 pt-36 inter w-full'>
            {/* TITLE */}
            <div className=' flex justify-between items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>Health Japanese Fried Rice</h1>
                    <div className='mt-12 flex flex-wrap gap-8 lg-:gap-0'>
                        <div className='flex gap-4 w-40 lg:w-52 items-center'>
                            <img src={footerSplashName} />
                            <div className='w-32 '>
                                <p className='inter font-semibold cursor-pointer'>Jonh Smith</p>
                                <p className='inter font-medium text-[#00000099] text-sm '>15 March 2022</p>
                            </div>
                        </div>
                        <div className='w-40 lg:w-52  flex justify-center items-center border-r-2 border-l-2  border-slate-200 gap-4'>
                            <BsClockFill size='1.4rem'/>
                            <div>
                                <p className='font-semibold'>PREP TIME</p>
                                <p className='text-[#00000099] text-sm'>15 Minutes</p>
                            </div>
                        </div>
                        <div className='w-40  lg:w-52  flex justify-center items-center border-r-2  border-slate-200 gap-4'>
                            <BsClockFill size='1.4rem'/>
                            <div>
                                <p className='font-semibold'>PREP TIME</p>
                                <p className='text-[#00000099] text-sm'>15 Minutes</p>
                            </div>
                        </div>
                        <div className='flex w-40 lg:w-52 justify-center items-center gap-4'><ImSpoonKnife size='1.4rem'/><p>Chicken</p></div>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8 font-semibold hidden lg:flex'>
                    <div className='flex flex-col gap-4 justify-center items-center '>
                        <div className='bg-[#E7FAFE] p-4 rounded-[50%] cursor-pointer'><AiOutlinePrinter size='1.5rem' /></div>
                        <p>PRINT</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='bg-[#E7FAFE] p-4 rounded-[50%] cursor-pointer'><FiShare size='1.5rem'/></div>
                        <p>SHARE</p>
                    </div>
                </div>
            </div>
            {/* IMAGE */}
            <div className='flex flex-col lg:flex-row mt-24 w-full h-full gap-8'>
                <img src={mainRecipe} alt="recipe" className='rounded-3xl w-full lg:w-[70%] h-[500px] object-cover h-full'/>
                <div className='bg-[#E7FAFE] w-full lg:w-[30%] p-8   rounded-3xl h-[500px] flex flex-col justify-between '>
                    <div className='flex flex-col '>
                        <h1 className='font-semibold text-xl'>Nutrition Information</h1>
                        <div className='flex justify-between py-4 border-b-2 border-slate-200'>
                            <p className='text-[#00000099] '>Calories</p>
                            <p className='font-semibold'>219.9 kcal</p>
                        </div>
                        <div className='flex justify-between py-4 border-b-2 border-slate-200'>
                            <p className='text-[#00000099] '>Total Fat</p>
                            <p className='font-semibold'>10.7 g</p>
                        </div>
                        <div className='flex justify-between py-4 border-b-2 border-slate-200'>
                            <p className='text-[#00000099] '>Protein</p>
                            <p className='font-semibold'>7.9 g</p>
                        </div>
                        <div className='flex justify-between py-4 border-b-2 border-slate-200'>
                            <p className='text-[#00000099] '>Carbohydrate</p>
                            <p className='font-semibold'>22.3 g</p>
                        </div>
                        <div className='flex justify-between py-4 border-b-2 border-slate-200'>
                            <p className='text-[#00000099] '>Cholesterol</p>
                            <p className='font-semibold'>37.4 mg</p>
                        </div>
                    </div>
                    <p className='text-[#00000099] bottom-0 text-center'>adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
            </div>
            <p className='text-[#00000099] mt-16 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </>
  )
}

export default MainRecipes